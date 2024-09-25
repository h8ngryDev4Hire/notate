import React from 'react';
import { SettingsContext } from '../../Settings.jsx'


export default function SettingsTopBar() {
	const { EXIT_CONTEXT } = React.useContext(SettingsContext)

	const [ exitState, setExitState ] = EXIT_CONTEXT

	const handleExitSettingsButtonClick = () => {
		setExitState(true)
	}

	return (
		<header id="settings-top-bar"
		className="w-full flex py-5 justify-between">
			
			<h1 id="settings-title" className={`text-2xl playfair-bold`}>Settings</h1>

			<button 
			 id="exit-settings-button"
			 className="trans-ease text-4xl text-[#777] font-bold hover:text-red-300"
			 onClick={handleExitSettingsButtonClick}
			>
				&times;
			</button>
		</header>
	)
}
