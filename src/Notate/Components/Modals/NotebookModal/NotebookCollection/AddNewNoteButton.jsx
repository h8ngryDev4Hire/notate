import React from 'react';
import PlusSign from '@assets/Designs/plus-logo.svg'
import NoteHandler from '@universal/Handlers/NoteHandler.js'

import  { NotebookModalContext } from '../NotebookModal.jsx'
import { NotateContext } from '@notate/Notate.jsx'



export default function AddNewNoteButton () {
	const { NOTE_CONTEXT, NOTEBOOK_CONTEXT } = React.useContext(NotateContext)
	const [ note, setNote ] = NOTE_CONTEXT 
	const [ notebook, setNotebook ] = NOTEBOOK_CONTEXT 

	const { EXIT_MODAL } = React.useContext(NotebookModalContext)





	const handleAddNewNoteClick = async () => {
		const newNote = new NoteHandler.Note

		await EXIT_MODAL()
		setNote(newNote)
	}

	return (
		<div id="add-new-note-container"
		className="flex size-[170px] items-center justify-center">
			<button id="add-new-note-button"
			className="trans-ease flex items-center justify-center size-[5rem] bg-gray-500 hover:bg-gray-400 rounded-xl opacity-[70%]"
			onClick={handleAddNewNoteClick}>
				<PlusSign className="size-[3rem] fill-gray-100"/>
			</button>
		</div>

	)
}
