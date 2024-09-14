import CoreService from './Utils/coreService.js'
import { spawnNotateTab } from './Utils/eventActions.js'
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



const CHROME_STORE_HIGH_PRIORITY = "CHROME_STORE_HIGH_PRIORITY"


export const BackgroundService = new CoreService()



/*
EVENT LISTENER
	Fires on Chrome startup. Is one of 2 chrome event listeners
	that fires bootstrapApplication().
*/
chrome.runtime.onStartup.addListener(async ()=> {
	await bootstrapApplication()

	let launchBehavior = BackgroundService.env.important.launchBehavior

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

	let launchBehavior = BackgroundService.env.important.launchBehavior

	if (launchBehavior && launchBehavior === 'onNewTab') {
		spawnNotateTab(launchBehavior)
	}
})



/*
EVENT LISTENER:
	Fires and runs the spawnTab() function on new tab if user 
	configuration has 'onNewTab' enabled.
*/
chrome.tabs.onCreated.addListener(async ()=> {
	await BackgroundService.updateBackgroundEnvVariables()

	let launchBehavior = BackgroundService.env.important.launchBehavior

	if (typeof launchBehavior === 'undefined') {
	}

	console.log('launchBehavior: ', launchBehavior)
	if (launchBehavior === 'onNewTab')  spawnNotateTab(launchBehavior)
})



/*
EVENT LISTENER:
	Fires and runs spawnTab() function when user clicks Notate
	popup
*/
chrome.action.onClicked.addListener(async() => {
	await BackgroundService.updateBackgroundEnvVariables()

	let launchBehavior = BackgroundService.env.important.launchBehavior

	if (launchBehavior === 'onClickPopup')  spawnNotateTab(launchBehavior)
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
	await BackgroundService.databaseRequest(port, message)
    });
  }
});








/*
FUNCTION:
	Intializes application by grabbing IDB Stores + updating necessary background worker 
	variables. Should only fire @ browser launch / extension install.
*/
const bootstrapApplication = async () => {
	await Promise.allSettled([
		BackgroundService.initializeDatabase(USER_CONFIGURATION_DB),
		BackgroundService.initializeDatabase(ERROR_LOGGING_DB),
		BackgroundService.initializeDatabase(NOTATE_DB)
	])
	

	if (
		!BackgroundService.databases.errorloggingdb ||
		BackgroundService.databases.errorloggingdb?.inventory instanceof Promise
	) {
		await BackgroundService.initializeDatabase(ERROR_LOGGING_DB)
	}

	if (
		BackgroundService.databases.userconfigurationdb instanceof Promise ||
		!BackgroundService.databases.userconfigurationdb ||
		!BackgroundService.databases?.inventory || 
		BackgroundService?.inventory instanceof Promise
	) {
		await BackgroundService.initializeDatabase(USER_CONFIGURATION_DB)
	} else await BackgroundService.updateBackgroundEnvVariables()

}



/*
FUNCTION:
	Used to quickly fetch env variables which is needed at startup.
*/
const fetchHighPriorityVariables =  () => {
	chrome.storage.sync.get([CHROME_STORE_HIGH_PRIORITY], (ENV_VARS)=>{
		console.log('ENV_VARS: ', ENV_VARS)
		try {
			launchBehavior = ENV_VARS[CHROME_STORE_HIGH_PRIORITY].pageBehavior
		} catch (error) {
		}
	})	
}




