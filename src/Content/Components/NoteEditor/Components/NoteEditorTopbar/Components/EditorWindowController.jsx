import React from 'react';
import { NoteEditorContext } from '../../../NoteEditor.jsx';
import CloseBtn from '@assets/Designs/Window-Controls/close-icon.svg';
import MaximizeBtn from '@assets/Designs/Window-Controls/maximize-icon.svg';
import MinimizeBtn from '@assets/Designs/Window-Controls/minimize-icon.svg';


export const NoteEditorWindowDisplayContext = React.createContext()


export default function EditorWindowController() {
	const MAXIMIZED = true
	const MINIMIZED = false

	const [ noteWindowState, updateNoteWindowState ] = React.useContext(NoteEditorContext) 
	const [ displayState, updateDisplayState ] = React.useContext(NoteEditorWindowDisplayContext)

	const runCloseWindow = () => {
		updateNoteWindowState(false)
	}

	const runMaximizeWindow = () => {
		updateDisplayState(MAXIMIZED)
	}

	const runMinimizeWindow = () => {
		updateDisplayState(MINIMIZED)
	}


	return (
		<div id="editor-window-ctrl-center"
			className="flex px-2 items-center">	
				
			<MinimizeBtn
				className="trans-ease size-8 rounded fill-yellow-700 cursor-pointer hover:fill-yellow-600"
				onClick={runMinimizeWindow}/>
			<MaximizeBtn
				className="trans-ease size-8 rounded fill-yellow-700 cursor-pointer hover:fill-yellow-600"
				onClick={runMaximizeWindow}/>
			<CloseBtn 
				className="trans-ease size-8 rounded fill-yellow-700 cursor-pointer hover:fill-red-400"
				onClick={runCloseWindow}/>
		</div>
	)
}
