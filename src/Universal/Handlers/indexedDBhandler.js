import { UserConfiguration as Configuration } from './UserConfiguration.js'

export default class DatabaseAdapter {
   constructor() {
    this.mapper = {
        name: 'NOTATE_DB',
        stores: ['NOTES', 'NOTEBOOKS', 'USER_CONFIGURATION'],
    }
    this.connection =  this.connectToDB();
    this.inventory =  this.getInventory();
    this.request = null;
  }
    
  async connectToDB() {
	  	   return new Promise((resolve, reject) => {
		   

   		   const DBBrige = indexedDB.open(this.mapper.name, 1);

   		   DBBrige.onsuccess = async (e) => {
		     if (this.workermessage === 'function') await this.workermessage()
   		     this.connection = e.target.result;
   		     resolve(this.connection);
   		   };

   		   DBBrige.onerror = (e) => reject(console.error('error initing DB: ' + e.target.error));

   		   DBBrige.onupgradeneeded = async (e) => {
			   console.log('Upgrading DB...')
   		 
   		     this.connection = e.target.result;
		     const transaction = e.target.transaction

   		     this.mapper.stores.forEach((storeKey)=>{
   		         this.connection.createObjectStore(storeKey, { keyPath: 'id', autoIncrement: true })
   		     })
   	
			
		     await this.setupUserConfiguration(transaction)

		     console.log('DB upgrade successful')

		     //Runs callback if defined
		     if (this.workermessage === 'function') {
			await this.workermessage()
		     }

   		     resolve(this.connection);
   		   };
   		 });


  }

  async setupUserConfiguration(transaction) {
	return new Promise((resolve, reject) => {
		try {
			const store = transaction.objectStore('USER_CONFIGURATION')
			store.add(Configuration)
			console.log('config upload successful')
		} catch (e) {
			console.error('config upload failed')
		}
	})
  }


    // Needs to be worked on
    async getInventory() {

        await this.connection;
        const db = this.connection
        const inventory = {}


	const allStoresWereFetched = (dataset) => {
		const formula =  (e) => e === false
		const results = dataset.some(formula)
		return !results
	}
        
        return new Promise( async (resolve, reject) => {
            const dbStoreNames = db.objectStoreNames
            const stores = {}

	    Object.values(dbStoreNames).forEach((name)=>{ stores[name] = false })


            Object.keys(stores).forEach((store)=>{
                inventory[store] = []

                
                const transaction = db.transaction(store, 'readonly')
                const objStore = transaction.objectStore(store)

                const request = objStore.getAll()

                request.onsuccess = (e) => {
                    const results = e.target.result
		    
		    if (typeof results === 'object' && results.length === 0) {
			stores[store] = true

			const comparison = allStoresWereFetched(Object.values(stores))

			    if (comparison) {
			    	this.inventory = inventory
				resolve(this.inventory)
			    }
		    }

                    results.forEach((item) => {
                        inventory[store].push(item)
			stores[store] = true

			const comparison = allStoresWereFetched(Object.values(stores))			

			if (comparison) {
				this.inventory = inventory
				resolve(this.inventory)
			}
                    })
                    
                }

                request.onerror = (e) => {reject(console.error(`Error processing request: ${e.error}`))}
            })
        })
    }



    async insertData(data, target_store) {        
        const db = await this.connection

        return new Promise((resolve, reject) => {
            const transaction = db.transaction([target_store], 'readwrite')
            const store = transaction.objectStore(target_store)

            const request = store.put(data)

            request.onsuccess = async ()=> {
	    	await this.cleanup()
		resolve('Item added to DB')
	    }

            request.onerror = (e) => {reject(console.error(`Error adding data: ${e.error}`))}
        })
    }
    


    async deleteData(data, target_store) {        
        const db = await this.connection

        return new Promise((resolve, reject) => {
            const transaction = db.transaction([target_store], 'readwrite')
            const store = transaction.objectStore(target_store)

            if (data?.id) {
                const item = data.id
                
                const request = store.delete(item)

                request.onsuccess = async ()=> {
			await this.cleanup()
			resolve('Item removed from DB')
		}

                request.onerror = (e) => {reject(console.error(`Something went wrong while attempting to perform DELETE operation: ${e.error}`))}
                
            } else {
                reject(console.error(`Item to delete does not have a valid schema for this database.`))
            }
        })
    }



    async cleanup() {
    	this.inventory = await this.getInventory()
	if (this.workermessage === 'function') await this.workermessage()
    }
}




export class DBWorker extends DatabaseAdapter {
	constructor(){
		super()
		
	}	
}
