import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/styles.css';
import NoteEditor, {NoteEditorContext} from './Components/NoteEditor/NoteEditor.jsx'
import ContextMenu from './Components/ContextMenu/ContextMenu.jsx' 
import NotificationMsg, { NotificationContext } from '@universal/Components/NotificationMessenger.jsx';
import NotificationHandler from '@universal/Handlers/NotificationHandler.js';


const root = document.createElement('div')
root.id = 'content-script-entry-point' 
document.body.prepend(root)


const ContentScript = () => {
	const [ noteWindowState, updateNoteWindowState ] = React.useState(false)
	const [ notification, setNotification ] = React.useState(new NotificationHandler)

	return (
		<div id="root-container"
			className="relative z-[100]">
			<NotificationContext.Provider value={[ notification, setNotification ]}>	
			  	{ notification?.active && <NotificationMsg/> }

				<NoteEditorContext.Provider value={[ noteWindowState, updateNoteWindowState ]}>
					<ContextMenu/>
					{ noteWindowState && <NoteEditor/> }
				</NoteEditorContext.Provider>
			</NotificationContext.Provider>
		</div>	
	)
}




ReactDOM.createRoot(root).render(<ContentScript/>);



/*
	Can be reached from inside of Component when sendMessage event is fired from background.js	
*/
//	chrome.runtime.onMessage.addListener( async (message, sender, sendResponse) => {
//		if (message.type) {
//			setBanner(!banner)
//		}
//	})
