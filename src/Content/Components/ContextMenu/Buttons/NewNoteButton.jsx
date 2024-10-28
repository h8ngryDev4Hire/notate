import React from 'react';
import { WebContentContext } from '@content/content.jsx';
import SvgLogo from '@assets/Designs/new-note-logo.svg'
import NoteHandler from '@universal/Handlers/NoteHandler.js';


export default function NewNoteButton() {
	const { 
		NOTE_WINDOW_CONTEXT, 
		NOTE_CONTEXT, 
		DARK_MODE_CONTEXT,
		CONTEXT_MENU_CONTEXT } = React.useContext(WebContentContext)
	const [ windowState, triggerWindowState ] = NOTE_WINDOW_CONTEXT
	const [ contextMenuState, setContextMenuState ] = CONTEXT_MENU_CONTEXT
	const [ note, setNote ] = NOTE_CONTEXT
	const [ isDark ] = DARK_MODE_CONTEXT

	const [ isRevealed, setIsRevealed ] = React.useState(false)


	const handleContextMenuButtonClick = () => {
		triggerWindowState(!windowState)
		setNote(new NoteHandler.Note)
		setContextMenuState(false)
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
				<span id="svg-icon" className={`size-[100%] flex items-center justify-center`}>
					<SvgLogo className={`size-[50%]`}/>
				</span>

				<label 
				 id="info-msg" 
				 className={`
					trans-ease-all absolute font-bold 
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
