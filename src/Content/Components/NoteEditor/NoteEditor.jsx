import React from 'react';
import NoteEditorTopbar from './Components/NoteEditorTopbar/NoteEditorTopbar.jsx';
import TextEditor, { TextInputContext } from '@universal/Components/TextEditor/TextEditor.jsx';
import { NoteEditorWindowDisplayContext } from './Components/NoteEditorTopbar/Components/EditorWindowController.jsx'
import NoteEditorTitle, { NoteEditorTitleContext } from './Components/NoteEditorTopbar/Components/NoteEditorTitle.jsx';
import SaveNoteButton from './Components/Buttons/SaveNoteButton.jsx';


export const NoteEditorContext = React.createContext()

export default function NoteEditor() {
	const MAXIMIZED = true
	const MINIMIZED = false

	const [ displayState, updateDisplayState ] = React.useState(MINIMIZED)
	const [ content,  setContent ] = React.useState('')
	const [ title, setTitle ] = React.useState('')

	React.useEffect(()=>{ updateDisplayState(MAXIMIZED) },[])

	return (
		<NoteEditorWindowDisplayContext.Provider value={[ displayState, updateDisplayState ]}>
			<div id="note-editor-container"
				className="fixed bottom-0 left-0 ml-10">

				<div id="note-editor" 
					className={`flex flex-col trans-ease size-[35rem] rounded bg-yellow-200 ${ displayState ? "" : "translate-y-[92.856%]" }`}>

					<NoteEditorTitleContext.Provider value={[ title, setTitle ]}>
						<NoteEditorTopbar/>

						<TextInputContext.Provider value={[ content, setContent ]}>
							<TextEditor 
								ToolbarComponents={<SaveNoteButton/>} 
								TailwindClassNames={"fill-gray-800 stroke-gray-800"}/>	
						</TextInputContext.Provider>
					</NoteEditorTitleContext.Provider>
				</div>
			</div>
		</NoteEditorWindowDisplayContext.Provider>
	)
}


