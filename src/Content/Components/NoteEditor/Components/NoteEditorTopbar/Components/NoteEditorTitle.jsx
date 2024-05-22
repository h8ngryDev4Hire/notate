import React from 'react';

export const NoteEditorTitleContext = React.createContext()


export default function NoteEditorTitle() {
	const [ title, setTitle ] = React.useContext(NoteEditorTitleContext)

	const handleChange = (event) => {
		setTitle(event.target.value)	
	}

	return (
		<input id="edit-title" 
			className="h-full bg-transparent text-black flex-grow border-none p-2 outline-none"
			type="text"
			placeholder="What are we Researching...?"
			value={title}
			onChange={handleChange}></input>
	)
}
