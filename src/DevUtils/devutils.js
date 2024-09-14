import { inspectIDBStore } from './Scripts/inspectIndexedDBStore.js';


export default function LaunchDevTools() {
	try {
		globalThis.inspectIDBStore = inspectIDBStore
		globalThis.ping = ping

		globalThis.ping()
	} catch(error) {
		error
		debugger
	}
}


const ping = () => {
	console.log('ping')
}
