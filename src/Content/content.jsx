import React from 'react';
import ReactDOM from 'react-dom/client';
import useRequest from '@universal/Hooks/useRequest/useRequest.jsx'

import DevTools from '@dev/devutils.js'

import RelatedNotesHeader from './Components/RelatedNotes/RelatedNotesHeader.jsx'
import ContextMenu from './Components/ContextMenu/ContextMenu.jsx'
import NoteEditor, {NoteEditorContext} from './Components/NoteEditor/NoteEditor.jsx'
import HoverRegion from './Components/HoverRegion.jsx';
import ContentHelper from './helper.js'
import NotificationMsg, { NotificationContext } from '@universal/Components/NotificationMessenger.jsx';
import NotificationHandler from '@universal/Handlers/NotificationHandler.js';
import tailwind from '@assets/notate.css'

/*
 * DevTool Call
*/
DevTools()


const tailwindStyles = tailwind.toString()


const NOTATE_DB = "notate"
const ERROR_LOGGING_DB = "errorLogging"
const USER_CONFIGURATION_DB = "userConfiguration"


const root = document.createElement('div')
root.id = 'content-script-entry-point'


const shadow = root.attachShadow({ mode: "open" })


const style = document.createElement('style')
style.textContent = tailwindStyles


const content = document.createElement('div')
content.id = 'content-script-load'


document.body.prepend(root)
shadow.prepend(style, content)


export const WebContentContext = React.createContext() 

const ContentScript = () => {
	const CONTENT_SCRIPT_CONTEXT = {
		NOTE_WINDOW_CONTEXT: React.useState(false),
		DATABASE_CONTEXT: React.useState(null),
		NOTATE_DB_CONTEXT: React.useState(null),
		USER_CONFIGURATION_DB_CONTEXT: React.useState(null),
		REQUEST_CONTEXT: useRequest(),
		NOTE_CONTEXT: React.useState(null),
		SHADOW_ROOT_ELEMENT: React.useState(shadow)
	}

	const [ noteWindowState, updateNoteWindowState ] = CONTENT_SCRIPT_CONTEXT.NOTE_WINDOW_CONTEXT 
	const [ note, setNote ] = CONTENT_SCRIPT_CONTEXT.NOTE_CONTEXT
	const [ database, setDatabase ] = CONTENT_SCRIPT_CONTEXT.DATABASE_CONTEXT 
	const [ notatedb, setNotate ] = CONTENT_SCRIPT_CONTEXT.NOTATE_DB_CONTEXT
	const [ userconfigurationdb, setUserConfiguration ] = CONTENT_SCRIPT_CONTEXT.USER_CONFIGURATION_DB_CONTEXT
	const [ response, makeRequest, processing ] = CONTENT_SCRIPT_CONTEXT.REQUEST_CONTEXT 
	const [ notification, setNotification ] = React.useState(new NotificationHandler)



	React.useEffect(()=>{
		const asyncProcessor = async () => {
			if (!notatedb?.inventory) {
				await makeRequest({
					type: 'GET_DATABASE',
					database: NOTATE_DB
				})
			}

			if (!userconfigurationdb?.inventory) {
				await makeRequest({
					type: 'GET_DATABASE',
					database: USER_CONFIGURATION_DB
				})
			}
		}

		asyncProcessor()
	},[response])

	
	React.useEffect(()=>{
		const responseHandler = async () => {
			if (response.type === 'RESULT' && response.status === '200') {
				const result = response.content

				if (result?.data && result?.database) {
					const db = result.data

					switch (result.database) {
						case NOTATE_DB:
							setNotate(db)
							break;
						case USER_CONFIGURATION_DB:
							setUserConfiguration(db)
							break;
					}
				}
			} else if (response.status === '400') {
				console.error('response: ', response)
				console.error('Request failed')

				await makeRequest({
					type: 'RELOAD_DATABASE',
					database: response.content.database
				})
			}
		}

		if (!processing) {
			responseHandler()
		}
	},[response])



	return (
		<div id="root-container"
		className="relative font-sans text-black z-content-script">
			<WebContentContext.Provider value={CONTENT_SCRIPT_CONTEXT}>
				<NotificationContext.Provider value={[ notification, setNotification ]}>

					<RelatedNotesHeader/>

					{ notification?.active && <NotificationMsg/> }

					<HoverRegion/>

					{ note && noteWindowState && <NoteEditor/> }

					<ContextMenu/>

				</NotificationContext.Provider>
			</WebContentContext.Provider>
		</div>	
	)
}




ReactDOM.createRoot(content).render(<ContentScript/>);



