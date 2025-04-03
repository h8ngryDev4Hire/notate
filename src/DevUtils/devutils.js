import { inspectIDBStore } from './Scripts/inspectIndexedDBStore.js';
import { runIdbMergeScript } from './Scripts/runIdbMergeTest.js'
import { insertTestDataToIdb } from './Scripts/insertDataToIdb/insertDataToIdb.js'


export default function LaunchDevTools() {
	try {
		globalThis.inspectIDBStore = inspectIDBStore
		globalThis.runIdbMergeScript = runIdbMergeScript
		globalThis.insertTestDataToIdb = insertTestDataToIdb
	} catch(error) {
		error
		debugger
	}
}


