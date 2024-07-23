import React from 'react';
import { WebContentContext } from '@content/content.jsx'
import NewNoteButton from './NewNoteButton/NewNoteButton.jsx'


export default function HoverRegion() {
	const { DATABASE_CONTEXT } = React.useContext(WebContentContext)
	const [ database ] = DATABASE_CONTEXT

	const [ newNoteButtonState, setNewNoteButtonState ] = React.useState(false) 

	React.useEffect(()=>{
		if (database) {
			const user = database?.inventory?.USER_CONFIGURATION[0]?.WebContent?.behavior?.newNotePopup?.value
			const value = user === "true"
			console.log(value)
			setNewNoteButtonState(value)
		}
	},[database])


	return (
		<div id="hover-region"
			className="fixed flex bottom-0 right-0 size-[7rem] items-center justify-center group">

			<div id="context-menu-items"
			className="w-20 h-60 flex flex-col items-center justify-center">
				{newNoteButtonState && <NewNoteButton/>}
			</div>
		</div>
	)
}
