import DatabaseAdapter from '@universal/Handlers/indexedDBhandler.js'
import DevTools from '@dev/devutils.js'


/*
 * DevTool Call
*/
DevTools()



/*
 * Constants
*/
export const NOTATE_DB = "notate"
export const ERROR_LOGGING_DB = "errorLogging"
export const USER_CONFIGURATION_DB = "userConfiguration"

const NOTATE_LANDING_PAGE = './index.html';
const CHROME_NEWTAB = 'chrome://newtab/'




/*
DATABASE ENV VARIABLES
*/
let notatedb, errorloggingdb, userconfigurationdb


/*
BACKGROUND ENV VARIABLES
*/
let launchBehavior;





/*
EVENT LISTENER
	Fires on Chrome startup. Is one of 2 chrome event listeners
	that fires bootstrapApplication().
*/
chrome.runtime.onStartup.addListener(async ()=> {
	await bootstrapApplication()

	if (launchBehavior && launchBehavior === 'onNewTab') {
		await spawnNotateTab(launchBehavior)
	}
})



/*
EVENT LISTENER
	Fires on Chrome startup. Is one of 2 chrome event listeners
	that fires bootstrapApplication().
*/
chrome.runtime.onInstalled.addListener(async ()=> {
	await bootstrapApplication()

	if (launchBehavior && launchBehavior === 'onNewTab') {
		await spawnNotateTab(launchBehavior)
	}
})



/*
EVENT LISTENER:
	Fires and runs the spawnTab() function on new tab if user 
	configuration has 'onNewTab' enabled.
*/
chrome.tabs.onCreated.addListener(async ()=> {
	await updateBackgroundEnvVariables()
	if (launchBehavior === 'onNewTab') await spawnNotateTab(launchBehavior)
})



/*
EVENT LISTENER:
	Fires and runs spawnTab() function when user clicks Notate
	popup
*/
chrome.action.onClicked.addListener(async() => {
	await updateBackgroundEnvVariables()
	if (launchBehavior === 'onClickPopup') await spawnNotateTab(launchBehavior)
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
	Core function that initializes indexedDB connection for the 
	Notate User Database which contains user-made content, as well
	as user-set configuration settings that the application
	components utilize
*/
const initializeNotateDatabase = async () => { 
	return new Promise(async (resolve, reject) => {

			notatedb = await new DatabaseAdapter(NOTATE_DB); 

			while (notatedb instanceof Promise) {
				await notatedb.inventory
				console.log('awaiting notatedb...')
			}


			resolve(notatedb)
	})
}


/*
FUNCTION:
	Core function that initializes indexedDB connection for the 
	Error Logging Database which contains a history of all errors
	that the application runs into during its lifespan.
*/
const initializeErrorLoggingDatabase = async () => { 
	return new Promise(async (resolve, reject) => {
		errorloggingdb = await new DatabaseAdapter(ERROR_LOGGING_DB); 

		while (errorloggingdb instanceof Promise) {
			await errorloggingdb.inventory
			console.log('awaiting errorloggingdb...')
		}

		resolve(errorloggingdb)
	})
}



/*
FUNCTION:
	Core function that initializes indexedDB connection for the 
	Error Logging Database which contains a history of all errors
	that the application runs into during its lifespan.
*/
const initializeUserConfigurationDatabase = async () => { 
	return new Promise(async (resolve, reject) => {
		userconfigurationdb = await new DatabaseAdapter(USER_CONFIGURATION_DB); 

		while (userconfigurationdb instanceof Promise) {
			await userconfigurationdb.inventory
			console.log('awaiting errorloggingdb...')
		}

		resolve(userconfigurationdb)
	})
}



/*
FUNCTION:
	
 */
const generateErrorLog = async (error, context={}) => {
	if (!errorloggingdb || errorloggingdb?.inventory instanceof Promise || !errorloggingdb?.insertData) await initializeErrorLoggingDatabase()

	try {
		const errorLog = {
			timestamp: new Date().toISOString(),
			error: {
				name: error?.name,
				message: error?.message,
				stackTrace: error?.stack
			},
			context: {
				 ...context,
				url: chrome.runtime.getURL(''),
				extensionId: chrome.runtime.id,
				manifestVersion: chrome.runtime.getManifest()?.manifest_version

			}
		}

		await errorloggingdb.insertData(errorLog, "ERRORS")
	} catch (error) {

	}
}



/*
FUNCTION:
	Injects the Notate starting page when the New Tab button is	
	clicked
*/
const spawnNotateTab = async (directive) => {
	if (directive === "onNewTab") {
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

	else if (directive === "onClickPopup") {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const tab = tabs[0]

			chrome.tabs.update(tab.id, { url: chrome.runtime.getURL(NOTATE_LANDING_PAGE) })
		})
	}

}



/*
FUNCTION:
	Updates Background Worker variables, which is typically only required after a CRUD Op	
	in USER_CONFIGURATION IDB Store
*/
const updateBackgroundEnvVariables = async () => {
	try {
		launchBehavior = userconfigurationdb.inventory.USER_CONFIGURATION[0].Notate.page.pageOpenBehavior.value	
	} catch (error) {
		await generateErrorLog(error, {function: "updateBackgroundEnvVariables"})
	} finally {
		if (typeof launchBehavior === 'undefined' ) {
			console.log('unable to set up background env variables. retrying in 500ms...')
			setTimeout(updateBackgroundEnvVariables, 500)
		}

		if (launchBehavior) console.log('env variables initialized.')
	}
}



/*
FUNCTION:
	Intializes application by grabbing IDB Stores + updating necessary background worker 
	variables. Should only fire @ browser launch / extension install.
*/
const bootstrapApplication = async () => {
	await initializeNotateDatabase()
	await initializeErrorLoggingDatabase()
	await initializeUserConfigurationDatabase()
	
	if (!errorloggingdb || errorloggingdb?.inventory instanceof Promise) await initializeErrorLoggingDatabase()

	if (userconfigurationdb) {
		await updateBackgroundEnvVariables()
	} else await initializeUserConfigurationDatabase()
}



/*
FUNCTION:
	Handles all inbound IDB CRUD Op Requests coming from both Notate.jsx page + Content
	Script. Updates necessary background components post DB CRUD Op dependent on what IDB 
	store is being operated on as well as what CRUD Op is being performed.
*/
const databaseRequest = async (port, message) => {
	try {
	if (
		(typeof port === 'object') && 
		message?.type && 
		message?.content && 
		message?.content?.database
	){
		let data, store, db, initialize;


		const { type, content: {database: target},  } = message
		
			switch (target) {
				case NOTATE_DB:
					db = notatedb
					initialize = initializeNotateDatabase
					break;

				case ERROR_LOGGING_DB:
					db = errorloggingdb
					initialize = initializeErrorLoggingDatabase
					break;

				case USER_CONFIGURATION_DB:
					db = userconfigurationdb
					initialize = initializeUserConfigurationDatabase
					break;
			}	

			if (typeof initialize === 'undefined') debugger

			switch (type) {
				case 'GET_DATABASE': 

					port.postMessage({ 
						type: 'DATABASE', 
						content: { data: db, database: target }
						 
					});
					break;
				
	
				case 'POST_DATABASE': 
					data = message?.content?.data
					store = message?.content?.store
	
					const insertOperation = async () => {
						if ( data && store && typeof db.insertData === 'function' ) {
					 		await db.insertData(data, store)
							await initialize()
	
							// Since only Update Ops will be performed on this store, its safe
							// to always assume that this function needs to be ran after every
							// user configuration update.
							if (store === 'USER_CONFIGURATION') await updateBackgroundEnvVariables()

							port.postMessage({ 
								type: 'DATABASE', 
								content: { data: db, database: target }
							})
						} else {
							await initialize()
							await insertOperation()
						}

					}
	
					await insertOperation()
	
					break;
				
	
				case 'DELETE_DATABASE': 
					data = message?.content?.data
					store = message?.content?.store
	
					const deleteOperation = async () => {
						if ( data && store && typeof db.deleteData === 'function' ) {
							await db.deleteData(data, store)
							await initialize()
							port.postMessage({ 
								type: 'DATABASE', 
								content: { data: db, database: target }
								
							})
						} else {
							await initialize()
							await deleteOperation()
						}
					}
	
					await deleteOperation()
	
					break;
				
	
				case 'RELOAD_DATABASE': 
					if (!db || db?.inventory instanceof Promise) {
						await initialize()
					} else {
						port.postMessage({ 
							type: 'DATABASE', 
							content: { data: db, database: target },
							
						})
					}
	
					break;
			}
	

		} else {
			throw new Error("message " + JSON.stringify(message) + "\n" + 
				" either has an invalid schema or is missing one or more required properties." +
				"\nmessages are expected to have '.type', '.content', and '.content.database' fields.")
		
		}
	} catch (error) {
		await generateErrorLog(error, { function: 'databaseRequest' })
	}



	 
}






/*
DEPRECATED FUNCTION:
	Broadcasts the DBAdapter instance to the active tab that hosts 
	an extension component (AKA content script/other extension pages)
*/
const broadcastDBConnection = async (notatedb) => {

	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const tab = tabs[0].id
		
		chrome.tabs.sendMessage(tab, { 
			type: 'DATABASE_CONNECTION', 
			content: notatedb 
		})
	})	
}





