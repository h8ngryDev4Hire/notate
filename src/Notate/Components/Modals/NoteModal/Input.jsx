import React from 'react';
import TextEditor, { TextInputContext } from '@universal/Components/TextEditor/TextEditor.jsx'
import NoteColorPicker from './Components/NoteColorPicker.jsx';

import { NoteModalContext } from './NoteModal.jsx'

export default function NoteModalInput() {
	const { TITLE_CONTEXT, CONTENT_CONTEXT } = React.useContext(NoteModalContext)

	const [ title, setTitle ] = TITLE_CONTEXT
	const [ content, setContent ] = CONTENT_CONTEXT
	
  	const handleTitleChange = (event) => { setTitle(event.target.value) };


	return (

	<TextInputContext.Provider value={[ content, setContent ]}>

		<div 
		 id="title-n-color-section"
		 className="flex py-1  my-2 space-x-2"
		>
	       		 <input
	       		   type="text"
	       		   id="edit-note-title"
	       		   className="flex-grow h-8 px-2 inline-block border-none rounded bg-[#444] text-white text-base outline-none"
	       		   placeholder="What's on your mind...?"
	       		   value={title}
	       		   onChange={handleTitleChange}
	       		 />

			<NoteColorPicker/>
		</div>

			<
			 TextEditor TailwindClassNames={"fill-gray-200 stroke-gray-200"}/>	
	</TextInputContext.Provider>

	)
}
