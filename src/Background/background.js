import StorageManager from '@universal/Handlers/StorageHandler.js';

const NOTATE_LANDING_PAGE = './index.html';
const CHROME_NEWTAB = 'chrome://newtab/'


/* 
	Browser Event Listener that fires when Browser starts.
	Event fired opens Notate page.	
*/
chrome.runtime.onStartup.addListener((tab)=> {
	if (tab.url !== chrome.runtime.getURL(NOTATE_LANDING_PAGE) || tab.url == CHROME_NEWTAB || tab.pendingUrl == CHROME_NEWTAB) {
		chrome.tabs.create({ url: chrome.runtime.getURL(NOTATE_LANDING_PAGE) })
	}
})


/*
	Browser Event Listenr that fires on new tab opened by user
	Event fired opens Notate Page
*/
chrome.tabs.onCreated.addListener(()=> {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const tab = tabs[0]


		if (tab.url == CHROME_NEWTAB || tab.pendingUrl == CHROME_NEWTAB) {
			chrome.tabs.update(tab.id, { url: chrome.runtime.getURL(NOTATE_LANDING_PAGE) })
		}
		else {
			console.log('statement not executed')
			console.log('TAB URL: ', tab.url)
			console.log('PENDING TAB URL: ', tab.pendingUrl)
		}

	})	
})



chrome.action.onClicked.addListener(()=>{
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const tab = tabs[0].id
		
		chrome.tabs.sendMessage(tab, { type: 'FUCKU' })

	})	
})
