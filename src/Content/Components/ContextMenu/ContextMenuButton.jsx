import React from 'react';
import SvgLogo from '@assets/Designs/new-note-logo.svg'
import { ContextMenuHoverRegionContext } from '@content/Components/HoverRegions/ContextMenuHoverRegion.jsx'


export default function ContextMenuButton () {
	const { CONTEXT_MENU_CONTEXT, HOVER_CONTEXT } = React.useContext(ContextMenuHoverRegionContext)
	const [ contextMenuState, setContextMenuState ] = CONTEXT_MENU_CONTEXT 
	const [ isHovered, setIsHovered ] = HOVER_CONTEXT

	const handleMenuClick = (event) => {
		setContextMenuState(true)	
	}

	return (
			<button 
			 id="context-menu-btn"
			 className={`
				btn-round-icon bg-gray-700 flex items-center justify-center 
				trans-ease mt-[200px] ${ (isHovered || contextMenuState) ? '-translate-y-[100px]' : ''}
			 `}
			 onClick={handleMenuClick}
			 onMouseEnter={()=> setIsHovered(true)}
			 onMouseLeave={()=> setIsHovered(false)}
			>
	
				<span className={`flex flex-col items-center justify-center`}>
					<div 
					 id="glow-effect" 
					 className={`
						 absolute btn-round-icon blur-xl bg-yellow-500 
					 	 pulse ${ (isHovered || contextMenuState) ? '-translate-y-[0%]' : ''}
					`}/>
					<SvgLogo className="size-10 rounded-full fill-yellow-100 stroke-3 ml-1"/>
				</span>
			</button>
	)
}
