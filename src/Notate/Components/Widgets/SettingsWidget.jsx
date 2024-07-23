import React from 'react';
import Settings from '@universal/Components/Settings/Settings.jsx'
import SettingsCogWheel from '@assets/Designs/settings-cog-wheel.svg'
import { NotateContext } from '@notate/Notate.jsx';

export default function SettingsWidget() {
	const NOTATE_CONTEXT = React.useContext(NotateContext)
	
	const [ scrollState, setScrollState ] = NOTATE_CONTEXT.SCROLL_STATE_CONTEXT

	const [ widgetState, setWidgetState ] = React.useState(false)

	const handleSettingsWidgetClick = () => {
		setWidgetState(!widgetState)	
	}

	React.useEffect(()=>{
		setScrollState(!widgetState)
	},[widgetState])

	return (
		<>
			<span id="settings-widget"
			className="trans-ease absolute group flex items-center justify-center top-0 right-0 size-[3rem] bg-[#2f2f2f] rounded-full mr-[2rem] mt-[2rem] cursor-pointer hover:bg-[#4f4f4f]"
			onClick={handleSettingsWidgetClick}>
				<SettingsCogWheel 
				className="trans-ease size-[2rem] fill-[#888] group-hover:fill-[#999]"/>

			</span>
			{
				widgetState && 
					<Settings
					ContextAdapter={NOTATE_CONTEXT}
					targetModule={["Notate", "WebContent"]}
					setterCallback={setWidgetState}/> 
			}
		</>
	)
}
