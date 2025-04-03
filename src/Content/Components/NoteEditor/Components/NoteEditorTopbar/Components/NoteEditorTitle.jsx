import React from 'react';
import { WebContentContext } from '@content/content.jsx'

export const NoteEditorTitleContext = React.createContext()


export default function NoteEditorTitle() {
	const { SHADOW_ROOT_ELEMENT } = React.useContext(WebContentContext) 
	const [ shadow ] = SHADOW_ROOT_ELEMENT

	const [ title, setTitle ] = React.useContext(NoteEditorTitleContext)

	const handleChange = (event) => {
		setTitle(event.target.value)	
	}

	const registerKeyPress = (event) => {
		const shadow = document.getElementById('content-script-entry-point')

		if (document.activeElement === shadow) {
			event.stopPropagation()
		}
	}

	React.useEffect(()=> {
		document.addEventListener('keydown', registerKeyPress)

		return () => document.removeEventListener('keydown', registerKeyPress)
	},[])

	return (
		<input 
		 id="edit-title" 
		 className={`
			 playfair-regular placeholder:text-slate-900 placeholder:opacity-70 placeholder:italic  
			 h-full bg-transparent text-black font-bold flex-grow border-none p-2 outline-none
		 `}
		 type="text"
		 placeholder="What are we Researching...?"
		 value={title}
		 onChange={handleChange}
		/>
	)
}
