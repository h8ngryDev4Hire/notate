import React from 'react'
import { RelatedNotesContext } from './RelatedNotesViewer.jsx' 


export default function ViewNavigator() {
	const {  NAV_POS_STATE, END_REACHED  } = React.useContext(RelatedNotesContext)

	const [ position, setPosition ] = NAV_POS_STATE
	const [ endReached, setEndReached ] = END_REACHED

	const handleNavigationClick = (directive) => {
		if ( directive === 'backward' && position > 0 ) {
			setPosition(position - 20)
		} else if ( directive === 'forward' && position < 100 && !endReached ) {
			setPosition(position + 20)
		}
	}


	return  (
		<div
		 id="view-navigator"
		 className={`
			h-[2rem] w-[4rem] flex
			fixed right-0 
		`}>
			<button 
			 id="" 
			 onClick={() => handleNavigationClick('backward')}
			 className={`
			 	w-[50%] bg-zinc-700 rounded-bl-xl 
				text-zinc-300 font-extrabold
				border-b-2 border-b-zinc-500
				hover:bg-zinc-600 trans-ease
			`}>
			 {`<`}
			</button>
			<button 
			 id="" 
			 onClick={() => handleNavigationClick('forward')}
			 className={`
			 	w-[50%] bg-zinc-700
				text-zinc-200 font-extrabold
				border-b-2 border-b-zinc-500
				hover:bg-zinc-600 trans-ease
			`}>
			 {`>`}
			</button>
		</div>
	)
}
