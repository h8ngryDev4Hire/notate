import React from 'react';
import { NOTATE_DB, ERROR_LOGGING_DB, USER_CONFIGURATION_DB } from '@background/background.js'
import { searchEngineProviders } from './searchEngineProviders';
import { BarStatusContext } from './SearchBar.jsx'
import { NotateContext } from '@notate/Notate.jsx'


export const SelectedEngineIndexContext = React.createContext()

export default function SearchEngineSelector({  }) {
	const { USER_CONFIGURATION_DB_CONTEXT, REQUEST_CONTEXT } = React.useContext(NotateContext)
	const [ request, makeRequest ] = REQUEST_CONTEXT
	const [database] = USER_CONFIGURATION_DB_CONTEXT 

  	const [ searchBarStatus ] = React.useContext(BarStatusContext)
  	const [selectedEngineIndex, setSelectedEngineIndex] = React.useContext(SelectedEngineIndexContext)

	const config = database?.inventory?.USER_CONFIGURATION[0]

	const providerList = Object.keys(searchEngineProviders)


  	const handleClick = () => {
		const currentIndex = providerList.indexOf(selectedEngineIndex)
    		const nextIndex = (currentIndex + 1) % providerList.length;
    		setSelectedEngineIndex(providerList[nextIndex]);


		
  	};

 
  	const selectedEngine = searchEngineProviders[selectedEngineIndex];

	React.useEffect(()=>{
		if (config) {
			const preferredSearchEngine = config?.Notate?.search?.preferredEngine?.value
			if (preferredSearchEngine) setSelectedEngineIndex(preferredSearchEngine)				
		}
	},[database])

	React.useEffect(()=>{
		if (config?.Notate?.search) {
			config.Notate.search.preferredEngine.value = selectedEngineIndex

			makeRequest({ 
				type: "POST_DATABASE", 
				data: config, 
				store: 'USER_CONFIGURATION',
				database: USER_CONFIGURATION_DB
			})
		}
	},[selectedEngineIndex])
 
  	return (
    		<div id="search-engine-selector" 
		className={`trans-ease flex items-center ${ searchBarStatus ? "bg-[#333333]" : "bg-[#595959]" } rounded-r-full px-2`}>
      			<button id="search-engine-btn" 
			className="flex items-center bg-transparent border-none cursor-pointer" 
			onClick={handleClick}>
        			<img id="search-engine-favicon" 
				className="w-6 h-6" 
				src={selectedEngine.favicon} 
				alt={selectedEngine.name} />
      			</button>
    		</div>
  );
}
