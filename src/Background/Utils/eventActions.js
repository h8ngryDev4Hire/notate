const NOTATE_LANDING_PAGE = './index.html';
const CHROME_NEWTAB = 'chrome://newtab/'

/*
FUNCTION:
	Injects the Notate starting page when the New Tab button is	
	clicked
*/
export const spawnNotateTab = async (directive) => {
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
