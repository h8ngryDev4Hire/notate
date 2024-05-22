import { StorageManager } from './utils.js';

chrome.runtime.onStartup.addListener((tab)=> {
	if (tab.url !== chrome.runtime.getURL('./notate/notate.html')) {
		chrome.tabs.create({ url: chrome.runtime.getURL('./notate/notate.html') })
	}
})

chrome.tabs.onCreated.addListener(()=> {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const tab = tabs[0]
		if (tab.url === "") {
			chrome.tabs.update(tab.id, { url: chrome.runtime.getURL('./notate/notate.html') })
		}
		else {
			console.log('statement not executed')
			console.log(tab.url)
		}

	})	
})
