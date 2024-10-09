import React from 'react';
import { ModalControllerContext } from '../Modal.jsx'

import Topbar from './Topbar.jsx'
import NotebookCollection from './NotebookCollection.jsx'
import Bottombar from './Bottombar.jsx'

export default function AddToNotebookModal() {
	const { 
		TRANSITION, 
		WHITELISTED, } = React.useContext(ModalControllerContext)
	const [ isActive, setIsActive ] = TRANSITION 
	const [ , setWhitelisted ] = WHITELISTED




	React.useEffect(()=> {
		setIsActive(true)
		setWhitelisted(["related-notes-viewer"])
	}, [])

	return (
		<div
		 id="add-to-notebook-modal"
		 className={`
			trans-ease-all fixed bottom-0 h-[50%] w-[70%] 
			flex flex-col py-[1rem] px-[2rem] space-y-[1rem]
			bg-[#2f2f2f] rounded-t-xl pointer-events-auto
			${ isActive ? "translate-y-[0%]" : "translate-y-[100%]" }
		`}
		>
			<header id="modal-topbar" className={`flex-shrink w-full`}>
				<Topbar/>
			</header>
			<main 
			 id="modal-centerpiece" 
			 className={`
			 	flex w-full flex-grow bg-white bg-opacity-10
			`}>
				<NotebookCollection/>	
			</main>
			<footer id="modal-bottombar">
				<Bottombar/>
			</footer>
		</div>
	)
}
