import React from 'react';
import NoteHandler from '@universal/Handlers/NoteHandler.js';
import NotebookHandler from '@universal/Handlers/NotebookHandler.js';
import { NotateContext } from '@notate/Notate.jsx';



export default function NewItemButton(){
	const { NOTE_CONTEXT, NOTEBOOK_CONTEXT } = React.useContext(NotateContext)
	const [ note, setNote ] = NOTE_CONTEXT
	const [ notebook, setNotebook ] = NOTEBOOK_CONTEXT

	const [ newButtonState, setNewButtonState ] = React.useState(false)
	const [ styleState, setStyleState ] = React.useState(false)


	const handleMouseOver =  () => {
		setNewButtonState(true)
		setStyleState(true)
	}

	const handleMouseLeave = () => {
		setNewButtonState(false)
		setStyleState(false)
	}

	const handleNewNoteClick = () => {
		const newNote = new NoteHandler.Note
		setNote(newNote)
	}

	const handleNewNotebookClick = () => {
		const newNotebook = new NotebookHandler.Notebook
		setNotebook(newNotebook)
	}


	return (
		<div id="new-item-btn-container"
		className="self-center max-h-[2rem] max-w-[80px] font-sans"	
		onMouseOver={handleMouseOver}
		onMouseLeave={handleMouseLeave}>
			<div id="new-note-button"
			className="">
				<button 
				className={ `relative btn-sm-icon z-[5] bg-green-500 shadow-lg` }>
					<span id="btn-logo" className="text-2xl font-bold ">+</span> {/* <--- to be replaced by an svg icon */}

				</button>

					<div id="new-options" className="w-full  flex flex-col">
						<button id="new-note-button" 
						className={ `trans-ease ${ styleState ? "-translate-y-[0%]" : "-translate-y-[100%]" } w-full h-[2rem] bg-green-600 z-[4]` }
						onClick={handleNewNoteClick}>
							<span className="text-white font-semibold text-sm">+ Note</span>
						</button>

						<button id="new-notebook-button" 
						className={ `trans-ease ${ styleState ? "-translate-y-[0%]" : "-translate-y-[200%]" } bg-green-700 q-full h-[2rem] rounded-b z-[4]` }
						onClick={handleNewNotebookClick}>
							<span className="text-white font-semibold text-sm">+ Book</span>
						</button>
					</div>
				
			</div>

		</div>
	)
}
