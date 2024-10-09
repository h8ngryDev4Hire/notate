import React from 'react';
import SvgLogo from '@assets/Designs/new-note-logo.svg'
import { WebContentContext } from '@content/content.jsx';
import NoteHandler from '@universal/Handlers/NoteHandler.js';


export default function NewNoteButton() {
	const { 
		NOTE_WINDOW_CONTEXT, 
		NOTE_CONTEXT, 
		DARK_MODE_CONTEXT } = React.useContext(WebContentContext)
	const [ windowState, triggerWindowState ] = NOTE_WINDOW_CONTEXT
	const [ note, setNote ] = NOTE_CONTEXT
	const [ isDark ] = DARK_MODE_CONTEXT

	const [ isRevealed, setIsRevealed ] = React.useState(false)


	const handleContextMenuButtonClick = () => {
		triggerWindowState(!windowState)
		setNote(new NoteHandler.Note)
	}
	

	return (
			<button 
			 id="new-note-btn"
			 className={`
				trans-ease-all btn-round-icon bg-zinc-800 hover:bg-zinc-700 
				flex flex-col items-center justify-center
			 `}
			 onClick={handleContextMenuButtonClick}
			 onMouseOver={()=> setIsRevealed(true)}
			 onMouseLeave={()=> setIsRevealed(false)}
			>
				<label 
				 id="info-msg" 
				 className={`
					trans-ease-all absolute  
					z-[-1] text-center ${ isRevealed 
					? "-translate-x-[75%] opacity-100" 
					: "translate-x-[0%] opacity-0" }	
					min-h-[1rem] min-w-[9rem]
					${ isDark ? "text-slate-200" : "text-black" }
				`}>
				{`Create a New Note`}
				</label>	
			</button>
	)
}
