import { inspectIDBStore } from './Scripts/inspectIndexedDBStore.js';


export default function LaunchDevTools() {
	try {
		globalThis.inspectIDBStore = inspectIDBStore
	} catch(error) {
		error
		debugger
	}
}

