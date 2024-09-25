import DatabaseAdapter from '@universal/Handlers/indexedDBhandler.js';

export async function insertDataToIdb({ database, store }, data) {
	try {
        	// Map the database string to the correct database name
        	const dbMapper = {
            		'NOTATE_DB': 'notate',
            		'ERROR_LOGGING_DB': 'errorLogging',
            		'USER_CONFIGURATION_DB': 'userConfiguration'
        	};

        	const dbName = dbMapper[database];
        	if (!dbName) {
            		throw new Error(`Invalid database name: ${database}`);
        	}

        	// Create a new instance of DatabaseAdapter
        	const dbAdapter = new DatabaseAdapter(dbName);

        	// Wait for the connection to be established
        	await dbAdapter.connection;

        	// Insert the data
        	const result = await dbAdapter.insertData(data, store);

        	return result;
	} catch (error) {
        	console.error('Error inserting data into IndexedDB:', error);
        	throw error;
    	}
}
