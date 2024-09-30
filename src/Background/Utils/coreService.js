import DatabaseAdapter from '@universal/Handlers/indexedDBhandler.js';
import { setHighPriorityVariables } from './chromeStorageHandler.js'

export const NOTATE_DB = "notate"
export const ERROR_LOGGING_DB = "errorLogging"
export const USER_CONFIGURATION_DB = "userConfiguration"



export default class CoreService {
	constructor() {
		this.databases = {
			notatedb: undefined,
			errorloggingdb: undefined,
			userconfigurationdb: undefined 
		}
		this.env = {
			important: {
				launchBehavior: undefined
			},
			common: {

			},
			namespace: {
				chromeStorage: {
					highPriority: "CHROME_STORE_HIGH_PRIORITY"
				}
			}
		}
	}
	

	async initializeDatabase(name) {
		return await new Promise(async (resolve, reject) => {
			let database;

			switch (name) {
				case NOTATE_DB:
					this.databases.notatedb = await new DatabaseAdapter(NOTATE_DB)
					database = this.databases.notatedb
					break;
				case ERROR_LOGGING_DB:
					this.databases.errorloggingdb = await new DatabaseAdapter(ERROR_LOGGING_DB)
					database = this.databases.errorloggingdb
					break;
				case USER_CONFIGURATION_DB:
					this.databases.userconfigurationdb = await new DatabaseAdapter(USER_CONFIGURATION_DB)
					database = this.databases.userconfigurationdb
					break;
			}

			await database.inventory

			if (name === USER_CONFIGURATION_DB) {
				await this.updateBackgroundEnvVariables()
			}

			resolve(database)
		})
	}


	async databaseRequest(port, message)  {
		try {
			if (
				(typeof port === 'object') && 
				message?.type && 
				message?.content && 
				message?.content?.database
			){
				let data, store, db;
	
	
				const { 
					type, 
					content: {database: target},  
				} = message
			
				switch (target) {
					case NOTATE_DB:
						db = this.databases.notatedb 
						break;
	
					case ERROR_LOGGING_DB:
						db = this.databases.errorloggingdb
						break;
	
					case USER_CONFIGURATION_DB:
						db = this.databases.userconfigurationdb
						break;
				}	
	
	
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
							await db
							await db.insertData
							
							if ( db.insertData === 'undefined' ) {
								await this.initializeDatabase(target)
								await insertOperation()

							} else if ( data && store && typeof db.insertData === 'function'  ) {
						 		await db.insertData(data, store)
								await this.initializeDatabase(target)
		
								// Since only Update Ops will be performed on this store, its safe
								// to always assume that this function needs to be ran after every
								// user configuration update.
								if (store === 'USER_CONFIGURATION') await this.updateBackgroundEnvVariables()
	
								port.postMessage({ 
									type: 'DATABASE', 
									content: { data: db, database: target }
								})
							} else {
								console.log('insertData failed both checks for some reason...')
								await this.initializeDatabase(target)
								await insertOperation()
							}
	
						}
		
						await insertOperation()
		
						break;
					
					case 'DELETE_DATABASE': 
						data = message?.content?.data
						store = message?.content?.store
		
						const deleteOperation = async () => {
							await db

							if ( db.deleteData === 'undefined' ) {
								await this.initializeDatabase(target)
								await deleteOperation()

							} else if ( data && store && typeof db.deleteData === 'function' ) {
								await db.deleteData(data, store)
								await this.initializeDatabase(target)
								port.postMessage({ 
									type: 'DATABASE', 
									content: { data: db, database: target }
									
								})
							} else {
								console.log('deleteData failed both checks for some reason...')
								await this.initializeDatabase(target)
								await deleteOperation()
							}
						}
		
						await deleteOperation()
		
						break;
					
					case 'RELOAD_DATABASE': 
						if (!db || db?.inventory instanceof Promise) {
							await this.initializeDatabase(target)
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
			await this.generateErrorLog(error, { function: 'databaseRequest' })
		}
	}


	async updateBackgroundEnvVariables() {
		let launchBehavior;

		try {
			await this.databases.userconfigurationdb.inventory

	
			this.env.important.launchBehavior = this.databases.
				userconfigurationdb.inventory.USER_CONFIGURATION[0].Notate.page.pageOpenBehavior.value	

			launchBehavior = this.env.important.launchBehavior 

		} catch (error) {
			await this.generateErrorLog(error, {function: "updateBackgroundEnvVariables"})
		} finally {
			if (
				!this.databases?.userconfigurationdb?.inventory ||
				!this.databases?.userconfigurationdb
			) {
				console.log('userconfigurationdb was not loaded. reloading now...')
				try {
					await this.initializeDatabase(USER_CONFIGURATION_DB)
				} catch(e) {}
				await this.updateBackgroundEnvVariables()
			}
	
			if (typeof launchBehavior === 'undefined' ) {
				console.log('unable to set up background env variables. retrying in 500ms...')
				setTimeout(()=> this.updateBackgroundEnvVariables(), 500)
			}
	
			if (launchBehavior) {
				console.log('env variables initialized. Updating high priority env variables...')
				
				setHighPriorityVariables(this.env.important)
			} 
		}
	}

	async generateErrorLog(error, context={}) {
		console.log('logging error...')

		if (
			!this.databases.errorloggingdb || 
			this.databases.errorloggingdb?.inventory instanceof Promise || 
			!this.databases.errorloggingdb?.insertData
		) await this.initializeDatabase(ERROR_LOGGING_DB)
	
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
	
			await this.databases.errorloggingdb.insertData(errorLog, "ERRORS")
		} catch (error) {
	
		}
	}

	
//	setHighPriorityVariables() {
//		const target = this.env.namespace.chromeStorage.highPriority 
//		const payload = this.env.important
//
//		chrome.storage.sync.set({ target : payload })
//	}
//
//
//	fetchHighPriorityVariables() {
//		let result;
//
//		const target = this.env.namespace.chromeStorage.highPriority
//
//		chrome.storage.sync.get(target, (res)=>{
//			result = res	
//		})
//
//		return result
//	}
}
