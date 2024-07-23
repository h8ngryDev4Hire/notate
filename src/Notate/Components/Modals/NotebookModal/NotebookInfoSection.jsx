import React from 'react';
import { NotateContext } from '@notate/Notate.jsx'
import { NotebookModalContext } from './NotebookModal.jsx'



export default function NotebookInfoSection () {
	const { NOTEBOOK_CONTEXT } = React.useContext(NotateContext)
	const [ notebook, setNotebook ] = NOTEBOOK_CONTEXT

	const { TITLE_CONTEXT, DESCRIPTION_CONTEXT, COLLECTION_CONTEXT } = React.useContext(NotebookModalContext)
	const [ title, setTitle ] = TITLE_CONTEXT 
	const [ description, setDescription ] = DESCRIPTION_CONTEXT 





	const handleTitleChange = (e) => { setTitle(e.target.value) }


	const handleDescriptionChange = (e) => { setDescription(e.target.value) }


	React.useEffect(()=>{ },[])


	return (
		<div id="notebook-info-section" className="flex flex-col h-full w-[20rem] p-1 rounded-b-3xl">
			<input id="notebook-title" 
			className="placeholder:trans-ease font-bold text-xl resize-none outline-none inline-block bg-[#4d4d4d] px-2 py-1 placeholder:text-lg placeholder:hover:text-white"
			value={title}
			placeholder="Name your research topic..."
			onChange={handleTitleChange}/>

			<textarea id="notebook-description" 
			className="placeholder:trans-ease placeholder:hover:text-white p-3 text-sm h-full resize-none outline-none inline-block bg-[#404040] rounded-b-3xl"
			placeholder="Organize your thoughts..."
			type="text"
			value={description}
			onChange={handleDescriptionChange}/>
		</div>
	)
}



