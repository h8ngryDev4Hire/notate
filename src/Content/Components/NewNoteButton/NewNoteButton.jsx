import React from 'react';
import SvgLogo from '@assets/Designs/new-note-logo.svg'
import { WebContentContext } from '@content/content.jsx';
import NoteHandler from '@universal/Handlers/NoteHandler.js';


export default function ContextMenuButton () {
	const { NOTE_WINDOW_CONTEXT, NOTE_CONTEXT } = React.useContext(WebContentContext)
	const [ windowState, triggerWindowState ] = NOTE_WINDOW_CONTEXT	// <-- Going to handle different UI state for context menu
	const [ note, setNote ] = NOTE_CONTEXT

	const handleContextMenuButtonClick = () => {
		triggerWindowState(!windowState)
		setNote(new NoteHandler.Note)
	}
	

	return (
			<button id="context-menu-btn"
				className={`relative btn-round-icon bg-gray-700 flex items-center justify-center trans-ease mt-[200px] group-hover:-translate-y-[100px]`}
				onClick={handleContextMenuButtonClick}>
	
				<span>
					<div id="glow-effect" 
						className="absolute inset-0 btn-round-icon blur-xl bg-yellow-500 pulse "></div>
					<SvgLogo className="size-10 fill-yellow-100 stroke-3 ml-1"/>
				</span>
			</button>
	)
}
