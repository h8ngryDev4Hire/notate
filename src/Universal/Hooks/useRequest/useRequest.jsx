import React from 'react'
import DatabaseAdapter from '@universal/Handlers/IdbHandler.js'


const POST = 'POST_DATABASE'
const GET = 'GET_DATABASE'
const DELETE = 'DELETE_DATABASE'
const REFRESH = 'RELOAD_DATABASE'

export default function useRequest() {
	const [ response, setResponse ] = React.useState(false)	
	const [ request, setRequest ] = React.useState(null)
	const [ processing, setProcessing ] = React.useState(false)

	const makeRequest = React.useCallback( newRequest => {
		setRequest(newRequest)
	})

	React.useEffect(()=>{
		const processor = async (request) => {
			const { database } = request

			const result = await handleRequest(request)

			setProcessing(false)

			if (result && typeof result === 'object') {

				setResponse({
					type: 'RESULT',
					status: '200',
					content: result
				})
			} else {
				setResponse({
					type: 'RESULT',
					status: '400',
					content: { 
						database: database,
						type: request.type,
						data: request?.data,
						store: request?.store
					} 
				})
			}
		}

		if (typeof request === 'object' && request != null) {
			setProcessing(true)
			processor(request)
		}
	}, [request])


	
	const handleRequest = async (request) => {
		if (request?.type && request?.database) {
			const { type, database } = request
	
			const payload = {
				type: type,
				database: database 
			}
	
			if (type === POST || DELETE && request?.data && request?.store) {
				payload.data = request.data
				payload.store = request.store
			}
	
			const response = await messageBackgroundScript(payload)
	
			if (response?.data && response?.database) {
				return response 
			} 
		} 
	}
	
	
	
	const messageBackgroundScript = React.useMemo(() => async (payload) => {
		return new Promise( ( resolve, reject )=>{
			const { type, database, data, store } = payload
			
			const port = chrome.runtime.connect({ name: 'DATABASE_CONNECTION' })
			const message = {
				type: type,
				content: { database: database }
			}
	
			if (data && store) {
				message.content.data = data
				message.content.store = store
			}
	
			port.postMessage(message)
	
			port.onMessage.addListener( message => {
				if (message.type === 'DATABASE') {
					if (typeof message.content?.data === 'object') {
						Object.setPrototypeOf(message.content.data, DatabaseAdapter.prototype)
	
						resolve(message.content)
					} else {
						resolve(false)
					}
				}
			})
		})	
	}, [])

	return [ response, makeRequest, processing ]
}




