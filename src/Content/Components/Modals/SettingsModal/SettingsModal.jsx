import React from 'react'

import { WebContentContext } from '@content/content.jsx'
import { ModalControllerContext } from '../Modal.jsx'

import Settings from '@universal/Components/Settings/Settings.jsx'

export default function SettingsModal() {
	const WEB_CONTEXT = React.useContext(WebContentContext)

	const { 
		TRANSITION, 
		EXIT_MODAL: exitModal 
	} = React.useContext(ModalControllerContext)
	const [ isActive, setIsActive ] = TRANSITION

	const [ modalState, setModalState ] = React.useState(true)

	React.useEffect(()=> {
		if (modalState) {
			
		} else {
			exitModal()		
		}
	},[modalState])

	return (
		<div className={`pointer-events-auto`}>

			<Settings
			 ContextAdapter={WEB_CONTEXT}
			 targetModule={["Notate","WebContent"]}
			 setterCallback={setModalState}
			/>
		</div>
	)
}
