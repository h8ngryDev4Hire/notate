import React from 'react';
import AddToNotebookModal from '@content/Components/Modals/AddToNotebookModal/AddToNotebookModal.jsx'
import { ContextMenuItemContext } from './ContextMenu.jsx'


export default function ContextItems() {
	const [ items ] = React.useContext(ContextMenuItemContext)

	const [ activeState, setActiveState ] = React.useState(false)
	const [ selectedItem, setSelectedItem ] = React.useState(false)


	const handleMouseHoverEvents = (e) => {
		if (e.type === 'mouseover') {

		} 
		else if (e.type === 'mouseleave') {}
	}


	const handleItemClick = (item) => { setSelectedItem(item) }


	React.useEffect(()=>{
		setActiveState(true)
	}, [])


	return (
		<div id="context-item-set"
		className="relative flex flex-col size-[30rem] items-center justify-center">
			{
				Object.entries(items).map((item, key) => {
					const contextItem = item[1]
					const positions = [
						["translate-x-[175%]", "translate-x-[0%]"],
						["-translate-y-[175%]", "-translate-y-[0%]"],
						["-translate-x-[175%]", "-translate-x-[0%]"]
					]

					return (
						<div id={ `context-item-${contextItem.callerId}` }
						key={key}
						className={ `group trans-ease-all size-[8rem] absolute justify-center items-center flex flex-col ${ activeState ? positions[key][0] : positions[key][1] }` }>
							<span id="context-button"
							className={ `trans-ease absolute size-[5rem] bg-gray-500 rounded-full hover:scale-125 ` }
							onMouseOver={handleMouseHoverEvents}
							onMouseLeave={handleMouseHoverEvents}
							onClick={()=>{handleItemClick(contextItem.callerId)}}>
							</span>

							<p id="context-help-message" 
							className="trans-ease pt-[8rem] text-transparent group-hover:text-white">
								{contextItem.infoMessage}
							</p>
						</div>

					)
				})	
			}

		</div>
	)
}
