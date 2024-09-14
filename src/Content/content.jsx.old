import React from 'react';
import ReactDOM from 'react-dom/client';
//import { NOTATE_DB, ERROR_LOGGING_DB, USER_CONFIGURATION_DB } from '@background/background.js'
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
		REQUEST_CONTEXT: React.useState('GET_DATABASE'),
		NOTE_CONTEXT: React.useState(null),
		SHADOW_ROOT_ELEMENT: React.useState(shadow)
	}

	const [ noteWindowState, updateNoteWindowState ] = CONTENT_SCRIPT_CONTEXT.NOTE_WINDOW_CONTEXT 
	const [ note, setNote ] = CONTENT_SCRIPT_CONTEXT.NOTE_CONTEXT
	const [ database, setDatabase ] = CONTENT_SCRIPT_CONTEXT.DATABASE_CONTEXT 
	const [ notatedb, setNotate ] = CONTENT_SCRIPT_CONTEXT.NOTATE_DB_CONTEXT
	const [ userconfigurationdb, setUserConfiguration ] = CONTENT_SCRIPT_CONTEXT.USER_CONFIGURATION_DB_CONTEXT
	const [ request, makeRequest ] = CONTENT_SCRIPT_CONTEXT.REQUEST_CONTEXT 
	const [ notification, setNotification ] = React.useState(new NotificationHandler)




	React.useEffect(()=>{

		const asyncEffect = async () => {
			if (request?.type && request?.database) {
				const payload = {
					request: request.type,
					database: request.database
				}

				if (request?.type === 'POST_DATABASE' || request?.type === 'DELETE_DATABASE') {
					payload.store = 'NOTES'
					payload.data = note
				}

				const result = await ContentHelper.databaseOperationRequest(payload)
					if (result?.data && result?.database) {
						debugger
						if (result.database === USER_CONFIGURATION_DB) debugger
						const db = result.data

						switch (request.database) {
							case NOTATE_DB:
								setNotate(db)
								break;
							case USER_CONFIGURATION_DB:
								setUserConfiguration(db)
								break;
						}

						makeRequest(false)

					} else {
						makeRequest( { 
							type: 'RELOAD_DATABASE', 
							database: request.database 
						})
					} 
			}
	
		}
	
		asyncEffect()

	},[request])


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



