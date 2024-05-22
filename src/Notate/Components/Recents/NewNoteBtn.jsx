import React from 'react';
import NoteModal from '../Modals/NoteModal/NoteModal.jsx';
import NoteHandler from '@universal/Handlers/NoteHandler.js';
import { NoteModalContext } from '../../index.jsx';



export default function NewNoteBtn(){
	const [ note, setNote ] = React.useContext(NoteModalContext)

	const handleClick = () => {
		
		
		const newNote = new NoteHandler.Note()
		setNote(newNote)
	}


	return (
		<div id="new-note-btn-container"
			className="mr-0">	
			<div id="new-note-button"
				className="">
				<button 
					className="btn-sm-icon bg-green-500 shadow-lg"
					onClick={handleClick}>
					<span id="btn-logo" className="text-2xl font-bold ">+</span> {/* <--- to be replaced by an svg icon */}
				</button>
			</div>

		</div>
	)
}
