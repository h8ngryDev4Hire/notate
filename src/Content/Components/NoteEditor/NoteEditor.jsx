import React from 'react';
import NoteEditorTopbar from './Components/NoteEditorTopbar/NoteEditorTopbar.jsx';
import TextEditor, { TextInputContext } from '@universal/Components/TextEditor/TextEditor.jsx';
import { NoteEditorWindowDisplayContext } from './Components/NoteEditorTopbar/Components/EditorWindowController.jsx'
import NoteEditorTitle, { NoteEditorTitleContext } from './Components/NoteEditorTopbar/Components/NoteEditorTitle.jsx';
import SaveNoteButton from './Components/Buttons/SaveNoteButton.jsx';

import { WebContentContext } from '@content/content.jsx'



export default function NoteEditor() {
	const MAXIMIZED = true
	const MINIMIZED = false

	const { SHADOW_ROOT_ELEMENT, NOTE_CONTEXT, TEXT_BUFFER_CONTEXT } = React.useContext(WebContentContext)
	const [ note, setNote ] = NOTE_CONTEXT
	const [shadowRootElement] = SHADOW_ROOT_ELEMENT
	const [ buffer, setBuffer ] = TEXT_BUFFER_CONTEXT


	const [ displayState, updateDisplayState ] = React.useState(MINIMIZED)
	const [ content,  setContent ] = React.useState(note?.content || buffer?.content)
	const [ title, setTitle ] = React.useState(note?.title || buffer?.title)


	React.useEffect(()=>{ 
		updateDisplayState(MAXIMIZED) 
	},[])

	React.useEffect(()=> {
		if (!note.id) {
			setBuffer({
				title: title,
				content: content
			})
		}
	},[ title, content ])

	return (
		<NoteEditorWindowDisplayContext.Provider value={[ displayState, updateDisplayState ]}>
			<div 
			 id="note-editor-container"
			 className={`
				 fixed bottom-0 left-0 ml-10
				 ${ !displayState && "pointer-events-none" }
			`}>

				<div 
				 id="note-editor" 
				 className={`
					flex flex-col trans-ease size-[35rem] rounded bg-yellow-200 
					 ${ displayState ? "" : "translate-y-[92.856%]" }
				`}>

					<NoteEditorTitleContext.Provider value={[ title, setTitle ]}>
						<NoteEditorTopbar/>

						<TextInputContext.Provider value={[ content, setContent ]}>
							<
							 TextEditor 
							 ToolbarComponents={<SaveNoteButton/>} 
							 TailwindClassNames={`
								 fill-gray-800 stroke-gray-800 
								 ${note?.color?.styles?.card || "bg-yellow-200"}
							 `}
							 ShadowRootElement={shadowRootElement}
							/>	
						</TextInputContext.Provider>
					</NoteEditorTitleContext.Provider>
				</div>
			</div>
		</NoteEditorWindowDisplayContext.Provider>
	)
}


