import React from 'react';
import { NOTATE_DB, ERROR_LOGGING_DB, USER_CONFIGURATION_DB } from '@background/background.js'
import { NotebookModalContext } from '../NotebookModal.jsx'
import { NotateContext } from '@notate/Notate.jsx'
import { NotificationContext } from '@universal/Components/NotificationMessenger.jsx'

export default function SaveNotebookButton() {
	const { NOTEBOOK_CONTEXT, REQUEST_CONTEXT } = React.useContext(NotateContext)
	const [ notebook, setNotebook ] = NOTEBOOK_CONTEXT
	const [ request, makeRequest ] = REQUEST_CONTEXT 

	const { TITLE_CONTEXT, DESCRIPTION_CONTEXT, COLLECTION_CONTEXT, EXIT_MODAL } = React.useContext(NotebookModalContext)
	const [ title, setTitle ] = TITLE_CONTEXT
	const [ description, setDescription ] = DESCRIPTION_CONTEXT
	const [ collection, setCollection ] = COLLECTION_CONTEXT

	const [ notification, setNotification ] = React.useContext(NotificationContext)


	const initialNotebookState = React.useRef({
		title: notebook?.title || '',
		description: notebook?.description || '',
		collection: notebook?.collection || []
	})

	
	const handleSaveClick = async () => {
		try {
			notebook.title = title
			notebook.description = description
			notebook.collection = collection
			setNotification(notification.showInfo('Notebook Saved'))
			await makeRequest({ 
				type: 'POST_DATABASE', 
				data: notebook, 
				store: 'NOTEBOOKS',
				database: NOTATE_DB
			})
			await EXIT_MODAL()
		} catch (e) {
			console.error(`Error saving notebook: ${e}`)
			setNotification(notification.showError())
		}

		
	}


	const collectionChanged = () => {
    		if (!notebook.id) return true; // New notebook, always allow save
    		const initialCollection = notebook.collection || [];
    		return JSON.stringify(initialCollection) !== JSON.stringify(collection);
	};

	const notebookChanged = title !== initialNotebookState.current.title || 
                        description !== initialNotebookState.current.description ||
                        collectionChanged();
	
	const valuesNotEmpty = title.trim() !== '' && description.trim() !== '';
	const isExistingNotebook = !!notebook.id;
	const permittedToSave = (isExistingNotebook ? notebookChanged : valuesNotEmpty);

	return (
		<button id="save-notebook-button"
		className={`trans-ease btn-sm-text ${ permittedToSave ? "bg-green-500" : "bg-gray-500" }`}
		onClick={handleSaveClick}
		disabled={!permittedToSave}>Save</button>
	)
}
