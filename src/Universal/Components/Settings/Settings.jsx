import React from 'react';
import { NOTATE_DB, ERROR_LOGGING_DB, USER_CONFIGURATION_DB } from '@background/background.js'
import ConfigurationModule from './Components/Modules/ConfigurationModule.jsx';
import SettingsBottomBar from './Components/Bars/SettingsBottomBar.jsx';
import SettingsTopBar from './Components/Bars/SettingsTopBar.jsx';



export const SettingsContext = React.createContext()


export default function Settings({ContextAdapter, targetModule, setterCallback}) {
	//const CONFIGURATION = [0]?.inventory?.USER_CONFIGURATION[0]

	const SETTINGS_CONTEXT = {
		DATABASE_CONTEXT: ContextAdapter.USER_CONFIGURATION_DB_CONTEXT,
		REQUEST_CONTEXT: ContextAdapter.REQUEST_CONTEXT,
		SAVE_CONTEXT: React.useState(false),
		EXIT_CONTEXT: React.useState(false),
		CONFIGURATION_CONTEXT: React.useState(false),
		SETTINGS_STATE_CONTEXT: React.useState(false)
	}

	const [ database ] = ContextAdapter.USER_CONFIGURATION_DB_CONTEXT
	const [ request, makeRequest ] = ContextAdapter.REQUEST_CONTEXT
	const [ configuration, setConfiguration ] = SETTINGS_CONTEXT.CONFIGURATION_CONTEXT
	const [ saveState ] = SETTINGS_CONTEXT.SAVE_CONTEXT
	const [ exitState ] = SETTINGS_CONTEXT.EXIT_CONTEXT
	const [ settingsState, setSettingsState ] = SETTINGS_CONTEXT.SETTINGS_STATE_CONTEXT 


	const buildSettingsPage = () => {
		const result = {};
		const user = database?.inventory?.USER_CONFIGURATION[0]

		if (user && targetModule instanceof Array) {
			targetModule.forEach( target => {
				result[target] = user[target]
			} )
			console.log(result)
			setConfiguration(result)
		}
	}

	

	React.useEffect(()=>{
		setSettingsState(true)
	},[])


	React.useEffect(()=>{
		if (database) buildSettingsPage()
	},[database])


	React.useEffect(()=>{
		if (saveState) {
			const user = database?.inventory?.USER_CONFIGURATION[0]
			const payload = Object.fromEntries(Object.entries(user))
			
			targetModule.forEach(module => {
				payload[module] = configuration[module]
			})
			makeRequest({ 
				type: "POST_DATABASE", 
				data: payload, 
				store: 'USER_CONFIGURATION',
				database: USER_CONFIGURATION_DB
			})

			setSettingsState(false)


			setTimeout(()=>{
				if (typeof setterCallback === 'function') setterCallback(false)   
			},300)
		}

	},[saveState])



	React.useEffect(()=>{
		if (exitState) {
			setSettingsState(false)

			setTimeout(()=>{
				if (typeof setterCallback === 'function') setterCallback(false)   
			},300)
		}

	},[exitState])

	

	return (
		<div 
		 id="settings-modal-container"
		 className={`
			 trans-ease fixed flex left-0 top-0 w-screen h-screen bg-opacity-40 
			 ${ settingsState ? "bg-black" : "bg-transparent" } 
			 justify-center z-modal playfair-regular
		 `}>

			<div 
			 id="settings-modal"
			 className={`
			 	trans-ease flex flex-col absolute px-[2rem] 
			 	${ settingsState ? "translate-y-[0%]" : "translate-y-[100%]" } 
			 	h-[85%] w-[60%] bottom-0 bg-zinc-800 rounded-t-xl  
			`}>

				<SettingsContext.Provider value={SETTINGS_CONTEXT}>
					<SettingsTopBar/>	
						<main className="overflow-auto space-y-5">
						{ targetModule instanceof Array && targetModule.map( module => {
							return (
								<ul className="space-y-3 mx-4"
								key={module}>
									<header className="text-xl text-white font-bold">
									{module}</header>
									<ConfigurationModule
									module={module}/>
								</ul>
							)
						})}
						</main>
					<SettingsBottomBar/>
				</SettingsContext.Provider>
			</div>	
		</div>
	)	
}
