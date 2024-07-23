import React from 'react'
import CloseModalButton from './CloseModalButton.jsx'
import DeleteNotebookButton from './DeleteNotebookButton.jsx'


export default function RightSection() {

	return (
	  			<div id="notebook-modal-seperator"
	  			className="flex flex-col h-full min-w-[2rem] max-w-[2rem] space-y-[1rem] ml-auto py-[1rem] mr-[2rem] items-center justify-center">
					<DeleteNotebookButton/>
					<span id="spacer" className="flex-grow"></span>
					<CloseModalButton/>
				</div>
	)
}
