import browser from 'webextension-polyfill'
import _ from 'lodash'

const CHROME_STORE_HIGH_PRIORITY = 'CHROME_STORE_HIGH_PRIORITY'



export default class Environment {
	constructor(){
		this.variables = {
			important: {
				launchBehavior: undefined,
			},
			common: {
				browserType: undefined
			},
		};
		this.setup()
	}


	async setup () {
		// target important type env variables 1st

		// launchBehavior
		const launchBehavior = await this.pull('launchBehavior') 
		if (launchBehavior != null) this.variables.important.launchBehavior = launchBehavior



		// target common type env variables after 
	
		// 'browserType'
		const browserType = (typeof chrome === 'object') ?  "chrome" : "firefox"
		this.variables.common.browserType = browserType
	}	


	push (payload) {
		try {
			if (typeof payload === 'object') {
				const [ key ] = Object.keys(payload)
				const [ value ] = Object.values(payload)
				this.update(key, value)

				browser.storage.sync.set({ notate: payload })
			}
		} catch (e) {
			console.error('something went wrong in setHighPriorityVariables')
			console.error(e)
		}
	} 


	async pull(query) {
		
		return new Promise( resolve => {
			try {
				browser.storage.sync.get('notate').then( resolution => {
					if (typeof resolution === 'object' && Object.keys(resolution).length > 0) {
	
						Object.entries(resolution.notate).forEach(([ key, val ])=>{
							if (query == key) {
								resolve(val)
							} else resolve(null)
						})
					} 	
				})
			} catch (e) {
				console.error('something went wrong in getHighPriorityVariables')
				console.error(e)
			}
	
	
		})
	
	}

	update(key, value) {
  		if (!_.isObject(this.variables)) {
			return false;
		}

		this.variables.important.launchBehavior = undefined

		function findPath(obj, target) {
        		// Handle base cases
        		if (!obj || typeof obj !== 'object') {
            			return null;
        		}

        		// Direct match at current level
        		if (target in obj) {
            			return [target];
        		}

        		// Search nested objects
        		for (const [currKey, val] of Object.entries(obj)) {
            			if (typeof val === 'object') {
                			const subPath = findPath(val, target);
                			if (subPath) {
                    				return [currKey, ...subPath];
                			}
            			}
        		}

        		return null;
    		}

		const path = findPath(this.variables ,key)	

		const result = _.set(this.variables, path, value);

		return result !== undefined;
	}
}
