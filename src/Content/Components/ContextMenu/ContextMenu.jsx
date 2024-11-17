import React from 'react'
import { ContextMenuHoverRegionContext } from '@content/Components/HoverRegions/ContextMenuHoverRegion.jsx'
import ContextItem from './ContextItem.jsx'
import NewNoteButton from './Buttons/NewNoteButton.jsx' 

import AddToNotebookModal from '@content/Components/Modals/AddToNotebookModal/AddToNotebookModal.jsx'
import AddToNotebookSVG from '@assets/Designs/Buttons/save-to-logo.svg'

import SettingsModal from '@content/Components/Modals/SettingsModal/SettingsModal.jsx'
import SettingsCogWheel from '@assets/Designs/settings-cog-wheel.svg'


/**
 * Root component for the content script's Context Menu. Stores
 * menu items as objects in the 'items' array that is supplied to
 * the ContextItem component
 */
export default function ContextMenu(){
	const items = [{
		name: 'add-to-notebook',
		desc: 'Add to your Notebooks',
		modal: (<AddToNotebookModal/>),
		icon: (<AddToNotebookSVG/>),
	},{
		name: 'settings',
		desc: 'Settings',
		modal: (<SettingsModal/>),
		icon: (<SettingsCogWheel className={`fill-white`}/>)

	}]

	const { CONTEXT_MENU_CONTEXT } = React.useContext(ContextMenuHoverRegionContext)
	const [ contextMenuState, setContextMenuState ] = CONTEXT_MENU_CONTEXT


	return (
		<div 
		 id="context-menu" 
		 className={`
		 	trans-ease-all w-full min-h-[45rem] absolute
			flex flex-col items-center space-y-[1.5rem] 
			${ contextMenuState ? "translate-x-[0%]" : "translate-x-[200%]" }
		`}>

		<NewNoteButton/>

		{items.map( (item, key) => {
			return (
				<
				 ContextItem
			         key={key}
				 modal={item.modal}
				 callerId={item.name}
				 infoMessage={item.desc}
				 icon={item.icon}
				/>	
			)
		})}
		</div>	
	)
}

