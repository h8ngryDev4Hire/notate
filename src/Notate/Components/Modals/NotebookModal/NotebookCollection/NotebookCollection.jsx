import React from 'react';
import AddNewNoteButton from './AddNewNoteButton.jsx'
import { NotebookModalContext } from '../NotebookModal.jsx'

import NoteCard from '@universal/Components/NoteCard.jsx'
import { NotateContext } from '@notate/Notate.jsx'



export default function NotebookCollection() {
	const { 
		NOTE_CONTEXT, 
		NOTEBOOK_CONTEXT, 
		NOTATE_DB_CONTEXT 
	} = React.useContext(NotateContext)

	const [ notebook, setNotebook ] = NOTEBOOK_CONTEXT
	const [ note, setNote ] = NOTE_CONTEXT
	const [ database ] = NOTATE_DB_CONTEXT 


	const { COLLECTION_CONTEXT, EXIT_MODAL } = React.useContext(NotebookModalContext)

	const [ collection, setCollection ] = COLLECTION_CONTEXT

	const [ notes, setNotes ] = React.useState([])

	const getNotesById = (collection) => {
		if (database?.inventory?.NOTES && collection) {
			const inventory = database.inventory.NOTES
			
			const notes = inventory.filter((note) => collection.includes(note.id));
			return notes
		} else return []
	}

	const handleNoteClick = async (note) => {
			await EXIT_MODAL()
			setNote(note)
	}

	const handleDragOver = (e) => {
		e.preventDefault()
	}

	const handleNoteDrop = (e) => {
		e.preventDefault()
		const data = e.dataTransfer.getData('text/plain')
		const note = JSON.parse(data)

		const target = note.id
		setCollection(prev => [...prev, target])
	}

	React.useEffect(()=>{
		setNotes(getNotesById(collection))	
	},[collection])



	return (
		<div id="notebook-collection" className="flex flex-col flex-grow space-y-4">
			
			<div id="note-card-collection" 
			className="flex  space-x-[1.25rem] items-center  flex-grow px-3 py-1 overflow-x-auto overflow-y-visible flex-nowrap"
			onDragOver={handleDragOver}
			onDrop={handleNoteDrop}>
				{
					notes.map((note, id)=>{
						return (
							<NoteCard key={id}
								note={note}
								onClick={()=>{handleNoteClick(note)}}/>
						)
					})
				}

				<AddNewNoteButton/>

			</div>
		</div>
	)
}
