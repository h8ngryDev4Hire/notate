export  function inspectIDBStore(databaseName) {
	if (!databaseName) throw new Error(`inspectIDBStore() 'databaseName' param expected but none supplied.`)
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(databaseName);

        request.onerror = event => reject(`Error opening database: ${event.target.error}`);

        request.onsuccess = event => {
            const db = event.target.result;
            const storeNames = Array.from(db.objectStoreNames);
            const allStoresData = {};

            let completedStores = 0;

            storeNames.forEach(storeName => {
                const transaction = db.transaction(storeName, 'readonly');
                const store = transaction.objectStore(storeName);
                const getAllRequest = store.getAll();

                getAllRequest.onerror = event => reject(`Error fetching data from ${storeName}: ${event.target.error}`);

                getAllRequest.onsuccess = event => {
                    allStoresData[storeName] = event.target.result;
                    completedStores++;

                    if (completedStores === storeNames.length) {
                        console.log(`Content of all stores in "${databaseName}":`, allStoresData);
                        resolve(allStoresData);
                    }
                };

                transaction.onerror = event => reject(`Transaction error for ${storeName}: ${event.target.error}`);
            });
        };
    });
}

// Usage example:
// inspectIDBStore('NOTATE_DB').then(data => console.log(data)).catch(error => console.error(error));
// inspectIDBStore('ERROR_LOGGING_DB').then(data => console.log(data)).catch(error => console.error(error));// Usage example:
// inspectIDBStore('notate', 'USER_CONFIGURATION').then(data => console.log(data)).catch(error => console.error(error));// Usage example:
// viewIndexedDBStore('USER_CONFIGURATION').then(data => console.log(data)).catch(error => console.error(error));
