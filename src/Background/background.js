import DatabaseAdapter from '@universal/Handlers/indexedDBhandler.js'

const NOTATE_LANDING_PAGE = './index.html';
const CHROME_NEWTAB = 'chrome://newtab/'

let db, launchBehavior;





/*
EVENT LISTENER
	Fires on Chrome startup. Is one of 2 chrome event listeners
	that fires bootstrapApplication().
*/
chrome.runtime.onStartup.addListener(async ()=> {
	await bootstrapApplication()

	if (launchBehavior && launchBehavior === 'onNewTab') {
		await spawnNotateTab()
	}
})


/*
EVENT LISTENER:
	Fires and runs the spawnTab() function on new tab if user 
	configuration has 'onNewTab' enabled.
*/
chrome.tabs.onCreated.addListener(async ()=> {
	await updateBackgroundVariables()
	if (launchBehavior === 'onNewTab') await spawnNotateTab()
})



/*
EVENT LISTENER:
*/
chrome.action.onClicked.addListener(async() => {
	await updateBackgroundVariables()
	if (launchBehavior === 'onClickPopup') await spawnNotateTab()
})



/*
EVENT LISTENER:
	Fires when an incoming database connection is received and	
	delegates all database operations to the databaseRequest()
	function.
*/
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === 'DATABASE_CONNECTION') {
    port.onMessage.addListener(async (message) => {
	await databaseRequest(port, message)
    });
  }
});



/*
FUNCTION:
	Core function that initializes indexedDB connection for application
	components to utilize
*/
const initializeDatabase = async () => { 
	return new Promise(async (resolve, reject) => {
		db = await new DatabaseAdapter; 
		await db.inventory
		resolve(db)
	})
}



/*
FUNCTION:
	Injects the Notate starting page when the New Tab button is	
	clicked
*/
const spawnNotateTab = async () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const tab = tabs[0]


		if (tab?.url == CHROME_NEWTAB || tab?.pendingUrl == CHROME_NEWTAB) {
			chrome.tabs.update(tab.id, { url: chrome.runtime.getURL(NOTATE_LANDING_PAGE) })
		}
		else {
			console.log('statement not executed')
			console.log((tab?.url ? ('TAB URL: ', tab?.url) : ''))
			console.log('PENDING TAB URL: ', tab?.pendingUrl)
		}

	})	
}



/*
FUNCTION:
	Updates Background Worker variables, which is typically only required after a CRUD Op	
	in USER_CONFIGURATION IDB Store
*/
const updateBackgroundVariables = async () => {
	if (db) {
		launchBehavior = db.inventory.USER_CONFIGURATION[0].Notate.page.pageOpenBehavior.value	
	} else {
		await initializeDatabase()
		await updateBackgroundVariables()
	}
}



/*
FUNCTION:
	Intializes application by grabbing IDB Stores + updating necessary background worker 
	variables. Should only fire @ browser launch / extension install.
*/
const bootstrapApplication = async () => {
	await initializeDatabase()
	if (db) {
		await updateBackgroundVariables()
	} else await initializeDatabase()
}



/*
FUNCTION:
	Handles all inbound IDB CRUD Op Requests coming from both Notate.jsx page + Content
	Script. Updates necessary background components post DB CRUD Op dependent on what IDB 
	store is being operated on as well as what CRUD Op is being performed.
*/
const databaseRequest = async (port, message) => {
	if ((typeof port === 'object') && (typeof message === 'object')) {
		let data,store;

		switch (message.type) {
			case 'GET_DATABASE': 
				port.postMessage({ type: 'DATABASE', content: db });
				break;
			

			case 'POST_DATABASE': 
				 data = message?.content?.data
				 store = message?.content?.store

				const insertOperation = async () => {
					try {
						if ( data && store && db.insertData ) {
					 		await db.insertData(data, store)
							await initializeDatabase()

							// Since only Update Ops will be performed on this store, its safe
							// to always assume that this function needs to be ran after every
							// user configuration update.
							if (store === 'USER_CONFIGURATION') await updateBackgroundVariables()

							port.postMessage({ type: 'DATABASE', content: db })
						} else {
							debugger 
							await initializeDatabase()
							await insertOperation()
						}
					} catch (e) {
						debugger
					}
				}

				await insertOperation()

				break;
			

			case 'DELETE_DATABASE': 
				data = message?.content?.data
				store = message?.content?.store

				const deleteOperation = async () => {
					if ( data && store && db.deleteData ) {
						await db.deleteData(data, store)
						await initializeDatabase()
						port.postMessage({ type: 'DATABASE', content: db })
					} else {
						debugger
						await initializeDatabase()
						await deleteOperation()
					}
				}

				await deleteOperation()

				break;
			

			case 'RELOAD_DATABASE': 

				if (!db) {
					await initializeDatabase()
					console.log('database being sent: ', db)
					port.postMessage({ type: 'DATABASE', content: db })
				}

				break;
		}
	}
}






/*
DEPRECATED FUNCTION:
	Broadcasts the DBAdapter instance to the active tab that hosts 
	an extension component (AKA content script/other extension pages)
*/
const broadcastDBConnection = async (db) => {

	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const tab = tabs[0].id
		
		chrome.tabs.sendMessage(tab, { 
			type: 'DATABASE_CONNECTION', 
			content: db 
		})
	})	
}





