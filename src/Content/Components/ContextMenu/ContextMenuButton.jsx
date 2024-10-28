import React from 'react';
import NotateLogo from '@assets/Designs/notate-logo.svg'
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
				btn-round-icon bg-gray-700 flex group 
				trans-ease-all items-center justify-center  
				${ (isHovered || contextMenuState) 
				? 'translate-y-[0%]' : 'translate-y-[250%]'}
			 `}
			 onClick={handleMenuClick}
			 onMouseEnter={()=> setIsHovered(true)}
			 onMouseLeave={()=> setIsHovered(false)}
			>
				<span className={`size-[100%] flex items-center justify-center z-[100]`}>
					<img 
					 src={`chrome-extension://emhjkpjiffmogbndmcnbnhpcfkljjonc/Designs/notate-logo.svg`} 
					 className={`
						h-[75%] w-[85%]
					`}/>
				</span>
				<span className={`flex flex-col items-center justify-center fixed`}>
					<div 
					 id="glow-effect" 
					 className={`
						 absolute btn-round-icon blur-xl bg-yellow-500 trans-ease-all 
					 	 pulse opacity-0 group-hover:opacity-100 z-[-1]
					`}/>
				</span>
			</button>
	)
}
