import { inspectIDBStore } from './Scripts/inspectIndexedDBStore.js';
import { runIdbMergeScript } from './Scripts/runIdbMergeTest.js'


export default function LaunchDevTools() {
	try {
		globalThis.inspectIDBStore = inspectIDBStore
		globalThis.runIdbMergeScript = runIdbMergeScript
	} catch(error) {
		error
		debugger
	}
}


const ping = () => {
	console.log('ping')
}
