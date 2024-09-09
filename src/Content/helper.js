import DatabaseAdapter from '../Universal/Handlers/indexedDBhandler.js';


export default class Helper {



	static getNoteURLRelation = (inventory) => {
		const URL = {
			full: window.location.href,
			domain: window.location.host || window.location.hostname,
			path: window.location.pathname
		}

		const result = []
	
		inventory.forEach((item) => {
			if (item.origin.includes(URL.full)) result.push(item)
		})
	
		return result
	}

	static async databaseOperationRequest ({ 
		request: request, 
		data: data, 
		store: store 
	}, database ) {
		return new Promise((resolve, reject) => {
			const port = chrome.runtime.connect({ name: 'DATABASE_CONNECTION' })
			const message = { type: request, database: database }
	
			switch (request) {
				case 'GET_DATABASE':
					port.postMessage(message)
					break;
	
				case 'RELOAD_DATABASE':
					port.postMessage(message)
					break;
	
				case 'POST_DATABASE':
					message.content = { data: data, store: store }
					port.postMessage(message)
					break;
	
				case 'DELETE_DATABASE':
					message.content = { data: data, store: store }
					port.postMessage(message)
					break;
			}
	
			port.onMessage.addListener((message)=>{
				if (message.type === 'DATABASE') {
					if (typeof message.content?.data === 'object') {
						Object.setPrototypeOf(message.content.data, DatabaseAdapter.prototype)
						 resolve(message.content)
						
							
					} else {
						 resolve(false)
					}
				}
			})

		})
		
			
	}

}



