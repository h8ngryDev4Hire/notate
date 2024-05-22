import React from 'react';
import NoteHandler from '@universal/Handlers/NoteHandler.js'
import { TextInputContext } from '@universal/Components/TextEditor/TextEditor.jsx';
import { NoteEditorTitleContext } from '../NoteEditorTopbar/Components/NoteEditorTitle.jsx' 
import { NotificationContext } from '@universal/Components/NotificationMessenger.jsx';
import SaveNoteLogo from '@assets/Designs/save-note-logo.svg'



export default function SaveNoteButton() {
	const [ title, setTitle ] = React.useContext(NoteEditorTitleContext)
	const [ content, setContent ] = React.useContext(TextInputContext)
	const [ notification, setNotification ] = React.useContext(NotificationContext)

	
	const handleSave = async (noteTitle, noteContent) => {
		const origin = window.location.href

		try {
			await NoteHandler.createNote(noteTitle, noteContent, origin)
			setNotification(notification.showInfo('Note Saved!'))
		} catch (e) {
			console.error('Error saving new note: ', e)
			setNotification(notification.showError(`Error saving note: ${e.message}`))
		}
	}

	return (
		<button id="save-note-btn"
			className="trans-ease flex h-6 w-10 rounded bg-yellow-400 text-white items-center justify-center hover:bg-green-400"
			onClick={()=>{handleSave(title, content)}}>
			<SaveNoteLogo className="size-4"/>
		</button>
	)
}


