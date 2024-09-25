const CHROME_STORE_HIGH_PRIORITY = 'CHROME_STORE_HIGH_PRIORITY'

export const setHighPriorityVariables = (data) => {
		chrome.storage.sync.set({ CHROME_STORE_HIGH_PRIORITY : data })
} 

export const getHighPriorityVariables = async (query) => {

	return new Promise( resolve => {
		chrome.storage.sync.get(CHROME_STORE_HIGH_PRIORITY, (resolution)=>{
			console.log('high priority fetch result: ', resolution)

			Object.entries(resolution.CHROME_STORE_HIGH_PRIORITY).forEach(([ key, val ])=>{
				if (query == key) {
					resolve(val)
				}
			})
		})	
	})

}
