import React from 'react';
import { NotebookModalContext } from '../NotebookModal.jsx'

export default function CloseModalButton() {
	const { EXIT_MODAL } = React.useContext(NotebookModalContext)

	return (
		<button id="close-modal-button"
		className="trans-ease w-8 text-gray-500  text-3xl font-bold hover:text-red-300"
		onClick={EXIT_MODAL}>
			&times;	
		</button>
	)
}
