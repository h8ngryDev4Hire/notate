import React from 'react';
import TrashLogo from '@assets/Designs/trash-logo.svg'
import { NotebookModalContext } from '../NotebookModal.jsx'
import { NotateContext } from '@notate/Notate.jsx'
import { NotificationContext } from '@universal/Components/NotificationMessenger.jsx'

import ConfirmationMsgHandler from '../../ConfirmationModal/ConfimrationMsgHandler.js'
import ConfirmationMsg, {ConfirmationMsgContext} from '../../ConfirmationModal/ConfirmationMsg.jsx'


export default function DeleteNotebookButton() {
	const { REQUEST_CONTEXT, NOTEBOOK_CONTEXT } = React.useContext(NotateContext)
	const [ notebook ] = NOTEBOOK_CONTEXT
	const [ request, makeRequest ] = REQUEST_CONTEXT 
	

	const { STATUS_CONTEXT, EXIT_MODAL } = React.useContext(NotebookModalContext)

	const [ status, setStatus ] = STATUS_CONTEXT

	const [ confMsgState, setConfMsgState ] = React.useContext(ConfirmationMsgContext)
	const [ notification, setNotification ] = React.useContext(NotificationContext)

	const [ disabledState, setDisabledState ] = React.useState(false)

	const confirmDeleteAction = async () => {
		const title = "WARNING: Notebook Contains Notes"
		const message = "If there were notes created within this notebook, " + 
				" they WILL be deleted!"
		const actionName = "Continue"

		const cancelCallback = () => { setStatus(true) }

		await new Promise(resolve => setTimeout(resolve, 100))
	
		setConfMsgState(new ConfirmationMsgHandler(title, message, actionName, performDeleteAction, false, cancelCallback))


	}

	const performDeleteAction = async () => {
		makeRequest({ type: 'DELETE_DATABASE', data: notebook, store: 'NOTEBOOKS' })
		await EXIT_MODAL()
		setNotification(notification.showInfo('Notebook Deleted'))
	
	}

	const handleDeleteClick = () => {
		let warn;
		const title = "Delete Notebook?"
		const message = "Are you sure you want to delete this notebook?"
		const actionName = "Delete"

		setStatus(false)

		const cancelCallback = () => { setStatus(true) }


		setConfMsgState(new ConfirmationMsgHandler(title, message, actionName, confirmDeleteAction, false, cancelCallback ))	


	}

	React.useEffect(()=>{
		if (!notebook.id) setDisabledState(true)
	},[])

	return (
		<button id="delete-notebook-btn"
		className={`trans-ease size-12  ${ disabledState ? "bg-gray-700" : "bg-gray-600 hover:bg-red-400" }  rounded flex items-center justify-center`}
		onClick={handleDeleteClick}
		disabled={disabledState}>
			<TrashLogo className="size-10 fill-transparent stroke-gray-50 stroke=[1.5]"/>	
		</button>
	)
}
