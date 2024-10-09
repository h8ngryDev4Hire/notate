import React from 'react';
import { WebContentContext } from '@content/content.jsx'


/**
 * Expects the following props:
 * @param 'modal': Component that will be passed to Modal.jsx
 * @param 'callerId': assigned to the 'id' attr
 * @param 'infoMessage': Message displayed when user hovers over button 
 * @param 'icon' : SVG Component icon to be assigned to the button.
 * 	
 * This component stores the expected modal component that is passed to 
 * Modal.jsx when clicked. 
*/
export default function ContextItem({
	modal: modal,
	callerId: callerId,
	infoMessage: infoMessage,
	icon: icon,
}){
	const { MODAL_STATE_CONTEXT, DARK_MODE_CONTEXT } = React.useContext(WebContentContext)
	const [ ,setSelectedModal ] = MODAL_STATE_CONTEXT
	const [ isDark ] = DARK_MODE_CONTEXT

	const [ itemSelected, setItemSelected ] = React.useState(false)
	const [ isRevealed, setIsRevealed ] = React.useState(false)


	const handleEventDelegation = (e) => {
		setItemSelected(true)
		setSelectedModal(modal)
	}


	return (
			<button 
			 id={`context-item-${callerId}`}
			 className={`
				trans-ease btn-round-icon bg-zinc-800 hover:bg-zinc-700 
				flex flex-col items-center justify-center
			 `}
			 onMouseOver={()=> setIsRevealed(true)}
			 onMouseLeave={()=> setIsRevealed(false)}
			 onClick={handleEventDelegation}
			>
				<label 
				 id="info-msg" 
				 className={`
					trans-ease-all absolute  
					z-[-1] text-center ${ isRevealed 
					? "-translate-x-[75%] opacity-100" 
					: "translate-x-[0%] opacity-0" }	
					min-h-[1rem] min-w-[9rem]
					${ isDark ? "text-slate-200" : "text-black" }
				`}>
				{infoMessage}
				</label>	
			</button>	
	)
}
