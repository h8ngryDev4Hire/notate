import React from 'react';
import { WebContentContext } from '@content/content.jsx'

export default function RelatedNote({note, tagId}) {
	const { NOTE_WINDOW_CONTEXT, NOTE_CONTEXT } = React.useContext(WebContentContext)
	const [ noteWindowState, setNoteWindowState ] = NOTE_WINDOW_CONTEXT 
	const [ targetNote, setTargetNote ] = NOTE_CONTEXT

	const handleNoteClick = () => {
		setNoteWindowState(!noteWindowState)
		setTargetNote(note)
		
	}

	const handleDragStart = (e) => {
		const JSONified = JSON.stringify(note)
		e.dataTransfer.setData('text/plain', JSONified);
	}


	return (
		<header id={ `related-note-heading-${tagId}` }
		className="trans-ease flex flex-col w-[12rem] h-[7rem] rounded-md bg-yellow-400 -translate-y-[75%] hover:-translate-y-[0%]"
		onClick={handleNoteClick}
		onDragStart={handleDragStart}
		draggable>
			<div id="related-note" 
			className="w-full flex-grow top-0 rounded-t-md bg-yellow-200"></div>
				<p id="related-note-title"
				className="text-sm font-bold text-black px-2 py-2">{note.title}</p>
		</header>

	)
}
