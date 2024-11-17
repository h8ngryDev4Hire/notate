import React from 'react';
import EditorWindowController from './Components/EditorWindowController.jsx';
import NoteEditorTitle from './Components/NoteEditorTitle.jsx';
import { WebContentContext } from '@content/content.jsx'



export default function NoteEditorTopbar() {
	const { NOTE_CONTEXT } = React.useContext(WebContentContext)
	const [ note, setNote ] = NOTE_CONTEXT

	return (
		<header 
		 id="editor-title" 
		 className={`
			h-10 w-full rounded-t flex pointer-events-auto
			${note?.color?.styles?.top || "bg-yellow-300"} 
		`}>

			<NoteEditorTitle/>
			<EditorWindowController/>
		</header>
	)
}
