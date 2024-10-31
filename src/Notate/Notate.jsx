import React  from 'react';
import useTheme from '@universal/Hooks/useTheme/useTheme.jsx'
import useRequest from '@universal/Hooks/useRequest/useRequest.jsx'

import Helper from './helper.js'
import { NOTATE_DB, ERROR_LOGGING_DB, USER_CONFIGURATION_DB } from '@background/background.js'
import SearchBar from './Components/Search/SearchBar.jsx';
import RecentNotes from './Components/Recents/RecentNotes.jsx';
import NewItemButton from './Components/Recents/NewItemBtn.jsx';
import NotebookModal from './Components/Modals/NotebookModal/NotebookModal.jsx';
import NoteModal from './Components/Modals/NoteModal/NoteModal.jsx';
import NotificationMsg, { NotificationContext } from '@universal/Components/NotificationMessenger.jsx';
import NotificationHandler from '@universal/Handlers/NotificationHandler.js';
import ConfirmationMsg, { ConfirmationMsgContext }  from './Components/Modals/ConfirmationModal/ConfirmationMsg.jsx';
import DragToTrashWidget from './Components/Widgets/DragToTrashWidget.jsx';
import SettingsWidget from './Components/Widgets/SettingsWidget.jsx'

import DevActionButton from './dev-action-button.jsx'


/* Constants */


/* Global Scope Variables */
const helper = new Helper


/* React Context Declarations  */
export const NotateContext = React.createContext()


/* Event Listeners */



/* App Component */
export default function Notate(){
	const [ wallpaperTheme, setWallpaperTheme ] = React.useState(false)

	  /* React useState Hooks */
	const NOTATE_CONTEXT = {
		NOTE_CONTEXT: React.useState(null),
		NOTEBOOK_CONTEXT: React.useState(null),
		SEARCH_TERM_CONTEXT: React.useState(''),
		RECENT_NOTES_STATE_CONTEXT: React.useState(true),
		DRAG_TO_TRASH_STATE_CONTEXT: React.useState(false),
		NOTATE_DB_CONTEXT: React.useState(null),
		USER_CONFIGURATION_DB_CONTEXT: React.useState(null),
		SCROLL_STATE_CONTEXT: React.useState(true),
		CONF_MSG_CONTEXT: React.useState(false),
		MODAL_STATE_CONTEXT: React.useState(false),
		REQUEST_CONTEXT: useRequest(),
		THEME_CONTEXT: useTheme(wallpaperTheme)
	}

	const [selectedNote, setSelectedNote] = NOTATE_CONTEXT.NOTE_CONTEXT 
	const [selectedNotebook, setSelectedNotebook] = NOTATE_CONTEXT.NOTEBOOK_CONTEXT 
	const [searchTerm, setSearchTerm] = NOTATE_CONTEXT.SEARCH_TERM_CONTEXT 
	const [ notatedb, setNotate ] = NOTATE_CONTEXT.NOTATE_DB_CONTEXT
	const [ userconfigurationdb, setUserConfiguration ] = NOTATE_CONTEXT.USER_CONFIGURATION_DB_CONTEXT
	const [ scrollState, setScrollState ] = NOTATE_CONTEXT.SCROLL_STATE_CONTEXT 
	const [ confMsgState, setConfMsgState ] = NOTATE_CONTEXT.CONF_MSG_CONTEXT
	const [ recentsState, setRecentsState ] = NOTATE_CONTEXT.RECENT_NOTES_STATE_CONTEXT

	const theme = NOTATE_CONTEXT.THEME_CONTEXT 
	const [ response, makeRequest, processing ] = NOTATE_CONTEXT.REQUEST_CONTEXT 

	const [ notification, setNotification ] = React.useState(new NotificationHandler);

	const [ devbool, setDevbool ] = React.useState(false)
	
	const notateInitialized = React.useRef(false)
	const userconfigurationIntialized = React.useRef(false)
	
	  /* Internal Component Functions */
	  const handleSearch = (term) => { setSearchTerm(term) };


	/* useEffect Hooks */
  	React.useEffect(() => {
		const asyncProcessor = async () => {
    			// Initial data fetch
			if (!notatedb?.inventory) {
    				await makeRequest({ type: 'GET_DATABASE', database: NOTATE_DB })
			}

			if (!userconfigurationdb?.inventory) {
    				await makeRequest({ type: 'GET_DATABASE', database: USER_CONFIGURATION_DB })
			}

		}

		asyncProcessor()

  	}, [response])


	React.useEffect(()=>{
		helper.visual.changeScrollState(scrollState)
	}, [scrollState])


	React.useEffect(() =>{
		const asyncProcessor = async () => {
			if (userconfigurationdb ) {
				setWallpaperTheme(userconfigurationdb?.inventory?.USER_CONFIGURATION[0]?.Notate?.page?.backgroundWallpaper?.value)	
			} else {
				await makeRequest({
					type: 'GET_DATABASE',
					database: USER_CONFIGURATION_DB 	
				})
			}
		}

		asyncProcessor()
	},[userconfigurationdb, wallpaperTheme])


	React.useEffect(() => {
		const responseHandler = async () => {
			if (response.type === 'RESULT') {
      				if (response.status === '200') {
        				const result = response.content;

        				if (result?.data && result?.database) {
        	  				const db = result.data;

        	  				switch (result.database) {
        	    					case NOTATE_DB:
        	      						setNotate(db);
        	      						break;

        	    					case USER_CONFIGURATION_DB:
        	      						setUserConfiguration(db);
        	      						break;
        	  				}

        	  				setRecentsState(true);
						
        				}
      				} else if (response.status === '400') {
					console.error('response: ', response)
        				console.error('Request failed');

        				// Optionally, you could retry the request here
        				await makeRequest({ 
						type: response.content.type == 'GET_DATABASE' 
							? 'RELOAD_DATABASE' 
							: response.content.type, 
						database: response.content.database,
						data: response.content?.data,
						store: response.content?.store
					})
      				}
    			}
		}

		if (!processing) {
			responseHandler()
		}
  	},[response])


	  /* Component */
	  return (
		<div id="app" className="w-full h-screen flex  flex-col flex-grow">
		  	<NotateContext.Provider value={NOTATE_CONTEXT}>
		  	<div id="wallpaper-theme" 
		  	className={`min-w-full flex flex-col flex-grow top-0 left-0 ${ theme.background || "" }`}>
					<ShadeComponent direction={"top"}/>
		  			<main id="notate" className="w-full h-full flex flex-col flex-grow mb-32 py-10 px-24">
						<header id="page-header" 
		  				className="text-center my-[1rem]">
						        <h1 id="page-title" 
		  					className={`text-[3rem]  garamond-bold mb-2 ${theme.text.h1 || ""} `}>Notate</h1>
							        <p 
		  						 id="page-subtitle" 
		  						 className={`text-lg playfair-bold ${theme.text.sub || ""}`}
		  						> Combining The Worlds of Searches &amp; Note Taking
		  						</p>
						</header>
					  	
						<NotificationContext.Provider value={[ notification, setNotification ]}>
					  	<ConfirmationMsgContext.Provider value={[confMsgState, setConfMsgState]}>

					  	<div id="search-section" 
					  	className="flex items-center justify-center space-x-4">
							<SearchBar onSearch={handleSearch} />
							<NewItemButton/>
					  	</div>

						<RecentNotes searchTerm={searchTerm} />
						{selectedNote && !selectedNotebook && <NoteModal/>}
						{ confMsgState && <ConfirmationMsg/> }
					  	{ selectedNotebook && !selectedNote && <NotebookModal/> }

					  	<DragToTrashWidget/>
						<NotificationMsg/>

					
						<SettingsWidget/>
						
					  	
					  	</ConfirmationMsgContext.Provider>
						</NotificationContext.Provider>		
		  			</main>
					<ShadeComponent direction={"bottom"}/>
		  	</div>
		  	</NotateContext.Provider>
		</div>
	  );
}



const ShadeComponent = ({direction}) => {
	let style;

	if (direction === 'top') {
		style = "bg-gradient-to-b top-0"
	} else if (direction === 'bottom') {
		style = "bg-gradient-to-t bottom-0"	
	}
	
	return (
		<div id={`shader-${direction}`} className={` w-full h-16 ${style} from-black to-transparent z-shader`}>
		</div>
	)
}

// dark-wood-bg cork-board-bg marble-chess-board-bg

