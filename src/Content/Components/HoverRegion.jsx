import React from 'react';
import { WebContentContext } from '@content/content.jsx'
import NewNoteButton from './NewNoteButton/NewNoteButton.jsx'
import { data } from 'autoprefixer';


const NOTATE_DB = "notate"
const ERROR_LOGGING_DB = "errorLogging"
const USER_CONFIGURATION_DB = "userConfiguration"


export default function HoverRegion() {
	const { USER_CONFIGURATION_DB_CONTEXT, REQUEST_CONTEXT } = React.useContext(WebContentContext)
	const [ database ] = USER_CONFIGURATION_DB_CONTEXT 
	const [ request, makeRequest ] = REQUEST_CONTEXT

	const [ newNoteButtonState, setNewNoteButtonState ] = React.useState(false) 

	React.useEffect(()=>{
		console.log('database: ', database)
		if (database) {
			const user = database?.inventory?.USER_CONFIGURATION[0]?.WebContent?.behavior?.newNotePopup?.value
			const value = user === "true"
			console.log(value)
			setNewNoteButtonState(value)
		} else {
			makeRequest({
				type: 'GET_DATABASE',
				database: USER_CONFIGURATION_DB
			})
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
