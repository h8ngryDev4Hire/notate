//import NewNoteLogo from '@assets/Designs/new-note.jsx';
import React from 'react';
import SvgLogo from '@assets/Designs/new-note-logo.svg'
import { NoteEditorContext } from '../../../NoteEditor/NoteEditor.jsx';


export default function NewNoteBtn ({passedClassNames}) {
	const [ windowState, triggerWindowState ] = React.useContext(NoteEditorContext)
	

	return (
			<button id="context-menu-btn"
				className={`${passedClassNames} relative btn-round-icon bg-gray-700 flex items-center justify-center trans-ease mt-[200px] group-hover:-translate-y-[100px]`}
				onClick={()=>{triggerWindowState(!windowState)}}>
	
				<span>
					<div id="glow-effect" 
						className="absolute inset-0 btn-round-icon blur-xl bg-yellow-500 pulse "></div>
					<SvgLogo className="size-10 fill-yellow-100 stroke-3 ml-1"/>
				</span>
			</button>
	)
}
