import browser from 'webextension-polyfill'
import CoreService from './coreService.js'
import Environment from './environment.js'
import { NOTATE_DB, ERROR_LOGGING_DB, USER_CONFIGURATION_DB } from '../background.js'
import { BROWSER_TYPE } from './browserType.js'


const NOTATE_LANDING_PAGE = './notate.html';

const NEWTAB = (BROWSER_TYPE === 'chrome') ? 'chrome://newtab/' : 'about:newtab'



/*
FUNCTION:
	Injects the Notate starting page when the New Tab button is	
	clicked
*/
export const spawnNotateTab = async (directive) => {
	if (directive === "onNewTab") {
		await browser.tabs.query({ active: true, currentWindow: true }).then( tabs => {
			const tab = tabs[0]
	
			if ( tab?.url == NEWTAB || tab?.pendingUrl == NEWTAB ) {
				browser.tabs.update(tab.id, { url: browser.runtime.getURL(NOTATE_LANDING_PAGE) })
			}
	
		})	
	}

	else if (directive === "onClickPopup") {
		await browser.tabs.query({ active: true, currentWindow: true }).then( tabs => {
			const tab = tabs[0]

			browser.tabs.update(tab.id, { url: browser.runtime.getURL(NOTATE_LANDING_PAGE) })
		})
	}

}



/*
FUNCTION:
	Intializes application by grabbing IDB Stores + updating necessary background worker 
	variables. Should only fire @ browser launch / extension install.
*/
export const bootstrapApplication = async (bg, env) => {
	if (bg instanceof CoreService && env instanceof Environment) {
		await Promise.allSettled([
			bg.initializeDatabase(USER_CONFIGURATION_DB),
			bg.initializeDatabase(ERROR_LOGGING_DB),
			bg.initializeDatabase(NOTATE_DB)
		])
		
	
		if (
			!bg.databases.errorloggingdb ||
			bg.databases.errorloggingdb?.inventory instanceof Promise
		) {
			await bg.initializeDatabase(ERROR_LOGGING_DB)
		}
	
		if (
			bg.databases.userconfigurationdb instanceof Promise ||
			!bg.databases.userconfigurationdb ||
			!bg.databases.userconfigurationdb?.inventory || 
			bg.databases.userconfigurationdb?.inventory instanceof Promise
		) {
			await bg.initializeDatabase(USER_CONFIGURATION_DB)
		}    

		await declareEnvironmentVariables(bg, env)
	}
}




/*
FUNCTION:
	
*/
export const declareEnvironmentVariables = async (bg, env) => {
	if (bg instanceof CoreService && env instanceof Environment) {
		if (bg.databases.userconfigurationdb.connection instanceof Promise) {
			await bg.databases.userconfigurationdb.connection
		}

		const inventory = bg?.databases?.userconfigurationdb?.inventory?.USER_CONFIGURATION[0]


		// Add more important env variables as application scales
		const important = [
			{  launchBehavior: inventory?.Notate?.page?.pageOpenBehavior?.value },
		]


		if (inventory) {
			important.forEach( variable => env.push(variable))
		}
	}
}
