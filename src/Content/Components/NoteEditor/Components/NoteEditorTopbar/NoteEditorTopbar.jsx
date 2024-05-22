import React from 'react';
import EditorWindowController from './Components/EditorWindowController.jsx';
import NoteEditorTitle from './Components/NoteEditorTitle.jsx';



export default function NoteEditorTopbar() {

	return (
		<header id="editor-title" 
			className="h-10 w-full rounded-t bg-yellow-300 flex">

			<NoteEditorTitle/>
			<EditorWindowController/>
		</header>
	)
}
