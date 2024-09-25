import React from 'react';
//import { NOTATE_DB, ERROR_LOGGING_DB, USER_CONFIGURATION_DB } from '@background/background.js'
import NoteHandler from '@universal/Handlers/NoteHandler.js'
import { TextInputContext } from '@universal/Components/TextEditor/TextEditor.jsx';
import { NoteEditorTitleContext } from '../NoteEditorTopbar/Components/NoteEditorTitle.jsx' 
import { NotificationContext } from '@universal/Components/NotificationMessenger.jsx';
import { WebContentContext } from '@content/content.jsx';
import SaveNoteLogo from '@assets/Designs/save-note-logo.svg'

const NOTATE_DB = "notate"
const ERROR_LOGGING_DB = "errorLogging"
const USER_CONFIGURATION_DB = "userConfiguration"

export default function SaveNoteButton() {
	const { REQUEST_CONTEXT, NOTE_CONTEXT, NOTE_WINDOW_CONTEXT } = React.useContext(WebContentContext)
	const [ windowState, updateWindowState ] = NOTE_WINDOW_CONTEXT
	const [ request, makeRequest ] = REQUEST_CONTEXT
	const [ note, setNote ] = NOTE_CONTEXT


	const [ title, setTitle ] = React.useContext(NoteEditorTitleContext)
	const [ content, setContent ] = React.useContext(TextInputContext)
	const [ notification, setNotification ] = React.useContext(NotificationContext)

	
	const handleSave = async (noteTitle, noteContent) => {

		try {
			note.title = title
			note.content = content

			await makeRequest({ 
				type: 'POST_DATABASE', 
				data: note,
				store: 'NOTES',
				database: NOTATE_DB 
			})
			
			setNotification(notification.showInfo('Note Saved!'))
			updateWindowState(false)
		} catch (e) {
			console.error('Error saving new note: ', e)
			setNotification(notification.showError(`Error saving note: ${e.message}`))
		}
	}

	const permittedToSave = !(title === '' || content === '')  

	return (
		<button id="save-note-btn"
		className={ `trans-ease flex h-6 w-10 rounded ${ permittedToSave ? "bg-yellow-300 hover:bg-green-400" : "backdrop-filter backdrop-brightness-[.80]" } text-white items-center justify-center ` }
		onClick={()=>{handleSave(title, content)}}
		disabled={!permittedToSave}>
			<SaveNoteLogo className="size-4"/>
		</button>
	)
}


