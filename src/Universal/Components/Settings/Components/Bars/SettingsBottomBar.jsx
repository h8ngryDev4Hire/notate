import React from 'react';
import { SettingsContext } from '../../Settings.jsx'



export default function SettingsBottomBar() {
	const { SAVE_CONTEXT } = React.useContext(SettingsContext)
	const [ saveState, setSaveState ]  = SAVE_CONTEXT


	const handleSaveClick = () => {
		setSaveState(true)	
	}


	return (
		<footer id="settings-bottom-bar"
		className="w-full flex py-5">
			<button id="save-settings-button"
			className="btn-sm-text font-bold text-[1rem] bg-green-500"
			onClick={handleSaveClick}>
				Save
			</button>
		</footer>
	)
}
