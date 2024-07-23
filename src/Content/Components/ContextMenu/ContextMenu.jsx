import React from 'react';
import ContextItems from './ContextItems.jsx'
import { WebContentContext } from '@content/content.jsx'

import AddToNotebookModal from '@content/Components/Modals/AddToNotebookModal/AddToNotebookModal.jsx'


export const ContextMenuItemContext = React.createContext()

export default function ContextMenu() {
	const { SHADOW_ROOT_ELEMENT } = React.useContext(WebContentContext)
	const [ shadow ] = SHADOW_ROOT_ELEMENT

	// TODO: need to determine what is the best way to supplement both 
	// Component and its metadata to be readable to <ContextItems/> 
	const CONTEXT_MENU_ITEMS_CONTEXT = {
		SELECTED_ITEM_CONTEXT: React.useState(false)
	}

	const CONTEXT_MENU_ITEMS = React.useState({
		item1: {
			component: (<AddToNotebookModal/>),
			callerId: "add-to-notebook",
			infoMessage: "Add to an existing Notebook"
		},
		item2: {
			component: (<AddToNotebookModal/>),
			callerId: "test",
			infoMessage: "test"
		},
		item3: {
			component: (<AddToNotebookModal/>),
			callerId: "test",
			infoMessage: "test"
		}
	})


	const [ dragState, setDragState ] = React.useState(false)
	const [ hoverState, setHoverState ] = React.useState(false)
	const [ activationState, setActivationState ] = React.useState(false)
	const [ menuState, setMenuState ] = React.useState(false)

	const handleDragStart = (e) => {
		if (e.target?.id.includes("related-note-heading-")) setDragState(true)
	}

	const handleDragEnd = (e) => {
		e.preventDefault()
		setDragState(false)
		setHoverState(false)
	}

	
	const handleHoverZoneDragEvents = (e) => {
		e.preventDefault()
		const state = e.type === 'dragover' 

		setHoverState(state)
	}

	const handleActivationZoneDragEvents = (e) => {
		e.preventDefault()
		const state = e.type === 'dragover'

		setActivationState(state)
	}

	const handleItemDropEvents = (e) => {
		e.preventDefault()
		setMenuState(true)
		setActivationState(false)
		const note = JSON.parse(e.dataTransfer.getData('text/plain'))
	}


	const handleOutsideClick = (e) => {
		if (e.target === e.currentTarget) setMenuState(false)
	}



	React.useEffect(()=>{
		const TARGET_ELEMENT = shadow.getElementById('root-container')

		if (TARGET_ELEMENT instanceof HTMLElement) {
			TARGET_ELEMENT.addEventListener('dragstart', handleDragStart)
			TARGET_ELEMENT.addEventListener('dragend', handleDragEnd)
		}

	},[])


	return (
		<div id="context-menu-event-listener"
		className={ `trans-ease-all fixed flex items-center justify-center ${(dragState || menuState) ? "bg-black" : "" } left-0 w-screen h-full bg-opacity-30 z-[90] ${ menuState ? "pointer-events-auto" : "pointer-events-none" }` }
		onClick={handleOutsideClick}>
			{
				(dragState || menuState) && (
					<div id="context-menu-hover-region"
					className="fixed bottom-0 flex items-center justify-center size-[30rem] pointer-events-auto"
					onDragOver={handleHoverZoneDragEvents}
					onDragLeave={handleHoverZoneDragEvents}
					onClick={handleOutsideClick}>
						{
							menuState && (
								<ContextMenuItemContext.Provider value={CONTEXT_MENU_ITEMS}>
									<ContextItems 
									items={CONTEXT_MENU_ITEMS}/>
								</ContextMenuItemContext.Provider>
							)
						}					
						<span id="context-menu"
						className={ `trans-ease absolute size-[7rem] rounded-full ${ (hoverState || menuState) ? `bg-gray-600 ${ activationState ? "scale-150" : "scale-100" } ` : "" } pointer-events-auto` }
						onDragOver={handleActivationZoneDragEvents}
						onDragLeave={handleActivationZoneDragEvents}
						onDrop={handleItemDropEvents}>	
						</span>

					</div>
				)
			} {

	
			}	
	

		</div>
	)
}
