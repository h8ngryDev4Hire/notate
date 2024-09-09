import DatabaseAdapter from '@universal/Handlers/indexedDBhandler.js'


export default class Helper {
	constructor() {
		this.database = {
			operationRequest: async ({ 
				type: type, 
				data: data, 
				store: store
			}, database ) => {
				return new Promise((resolve, reject) => {
					const port = chrome.runtime.connect({ name: 'DATABASE_CONNECTION' })
					const message = { 
						type: type, 
						content: { database: database } 
					}

			
					switch (type) {
						case 'GET_DATABASE':
							port.postMessage(message)
							break;
			
						case 'RELOAD_DATABASE':
							port.postMessage(message)
							break;
			
						case 'POST_DATABASE':
							message.content.store = store
							message.content.data = data 
							port.postMessage(message)
							break;
			
						case 'DELETE_DATABASE':
							message.content.store = store
							message.content.data = data 
							port.postMessage(message)
							break;
					}

					console.log('chrome message being sent: ', message)
			

					port.onMessage.addListener((message)=>{
						console.log('chrome message being recieved: ,', message)

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

		this.dragdrop = {
			start: () => {},
		}

		this.visual = {
			changeScrollState: async (bool) => {
				const bodyClasses = document.body.classList 
				const disabledClassName = "overflow-hidden"
				const classExists = bodyClasses.contains(disabledClassName)	
			
				const classRemover = (bool && classExists) ? bodyClasses.remove(disabledClassName) : null
				const classAdder = (!bool && !classExists) ? bodyClasses.add(disabledClassName) : null 
			},




			setBackgroundWallpaper: (database, target) => {
				if (target instanceof HTMLElement && database instanceof DatabaseAdapter) {
					const wallpaperConfiguration = database.inventory.USER_CONFIGURATION[0].Notate.page.backgroundWallpaper
					const configList = wallpaperConfiguration.options.map( option => convertCamelCaseToKebabCase(option) + "-bg" )
					const selectedWallpaper =  convertCamelCaseToKebabCase( wallpaperConfiguration.value ) + "-bg"
					const classes = Array.from(target.classList)
					const comparison = classes.filter(item => item.includes('-bg'));

					comparison.forEach(className => {
    						if (configList.some(configItem => className.includes(configItem))) {
        						target.classList.remove(className);
    						}
					});

					if (!target.classList.contains(selectedWallpaper)) {
    						target.classList.add(selectedWallpaper);
					}


				}
			}
 
		}
	}
}



const convertCamelCaseToKebabCase = (input) => {
	return input
        	.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        	.replace(/[\s_]+/g, '-')
		.toLowerCase() 
}
