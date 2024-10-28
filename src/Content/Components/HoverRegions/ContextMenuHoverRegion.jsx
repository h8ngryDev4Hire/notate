import React from 'react';
import { WebContentContext } from '@content/content.jsx'
import ContextMenuButton from '@content/Components/ContextMenu/ContextMenuButton.jsx'
import ContextMenu from '@content/Components/ContextMenu/ContextMenu.jsx'


export const ContextMenuHoverRegionContext = React.createContext()

const NOTATE_DB = "notate"
const ERROR_LOGGING_DB = "errorLogging"
const USER_CONFIGURATION_DB = "userConfiguration"


export default function ContextMenuHoverRegion() {
	const { USER_CONFIGURATION_DB_CONTEXT, 
		REQUEST_CONTEXT, 
		SHADOW_ROOT_ELEMENT,
		CONTEXT_MENU_CONTEXT } = React.useContext(WebContentContext)

	const HOVER_REGION_CONTEXT = {
		CONTEXT_MENU_CONTEXT: CONTEXT_MENU_CONTEXT,
		HOVER_CONTEXT: React.useState(false) 
	} 

	const [ shadow ] = SHADOW_ROOT_ELEMENT
	const [ database ] = USER_CONFIGURATION_DB_CONTEXT 
	const [ request, makeRequest ] = REQUEST_CONTEXT

	const [ contextMenuButton, setContextMenuButton ] = React.useState(false) 
	const [ contextMenuState, setContextMenuState ] = HOVER_REGION_CONTEXT.CONTEXT_MENU_CONTEXT 
	const [ isHovered, setIsHovered ] = HOVER_REGION_CONTEXT.HOVER_CONTEXT

	const hoverReginonRef = React.useRef(null)





	const handleContextMenuUnfocus = (event) => {
		const target = event.target.closest('#content-script-entry-point')

		if (!target) {
			setContextMenuState(false)
		}

	}

	React.useEffect(()=>{
		const asyncProcessor = async () => {
			if (database) {
				const user = database?.inventory?.USER_CONFIGURATION[0]?.WebContent?.behavior?.contextMenuPopup?.value
				const value = user === "true"
				setContextMenuButton(value)
			} else {
				await makeRequest({
					type: 'GET_DATABASE',
					database: USER_CONFIGURATION_DB
				})
			}
		}

		asyncProcessor()
	},[database])


	React.useEffect(()=>{
		if (contextMenuState) {
			document.addEventListener('click', handleContextMenuUnfocus)
		} else {
			document.removeEventListener('click', handleContextMenuUnfocus)
		}
	},[contextMenuState])


	return (
		<ContextMenuHoverRegionContext.Provider value={HOVER_REGION_CONTEXT}>
			<div 
			 id="context-menu-hover-region"
			 ref={hoverReginonRef}
			 className={`
				 fixed flex bottom-0 right-0 size-[7rem] items-center justify-center 
			 `}
			 onMouseEnter={()=> setIsHovered(true)}
			 onMouseLeave={()=> setIsHovered(false)}
			>
	
				<div 
				 id="context-menu-items"
				 className={`
					w-20 h-60 flex flex-col items-center justify-center
					relative
				`}>
					<ContextMenu/>
					{ contextMenuButton && <ContextMenuButton/> }
				</div>
			</div>
		</ContextMenuHoverRegionContext.Provider>
	)
}
