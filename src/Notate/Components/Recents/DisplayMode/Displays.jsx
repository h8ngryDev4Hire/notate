import React from 'react'
import { createPortal } from 'react-dom'

import { NotateContext } from '@notate/Notate.jsx';
import RightCurvedUpArrow from '@assets/Designs/Arrows/right-curved-up-arrow.svg'


export const NoItemsFound = () => {
	const { THEME_CONTEXT } = React.useContext(NotateContext)
	const theme = THEME_CONTEXT

	return (
		<div id="no-items-found-container" className="flex  items-center justify-center">
			<h2 id="no-items-found-text" className={`text-[1.45rem] font-bold garamond-bold ${theme.text.h2 || ""}`}>No Notes or Notebooks Found...</h2>
		</div>
	)
}

export const EmptyRecentsContent = () => {
	const { THEME_CONTEXT } = React.useContext(NotateContext)
	const theme = THEME_CONTEXT

	const [ portal, setPortal ] = React.useState(null)

	React.useEffect(()=>{
		const test = window.document.getElementById('new-item-btn-container')
		// For now we are leaving this disabled until we can fix other Components
		// to be more responsive
		//setPortal(test)

	},[])

	return (
		<>
			<div className="flex items-center justify-center">
				<div className="items-center justify-center">
					<h3 className={`text-2xl font-semibold ${theme.text.h3 || ""}`}>Nothing to see yet... </h3>
					<h1 className={`text-[4rem] ${theme.text.h3 || ""} font-bold text-center`}>:(</h1>
	
				</div>

			</div>




		
			{portal && createPortal(
				<div id="new-items-help-context"
				className="absolute flex ">
					<p className="text-gray-400 max-w-[6rem] text-bold">Click here to begin adding some notes!</p>
					<span>
						<RightCurvedUpArrow className="size-12 fill-gray-500"/>
					</span>
				</div> , portal 
			)}
		</>
	) 
}

