import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import useTheme from '@universal/Hooks/useTheme.jsx'

import Helper from './helper.js'
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


/* Global Scope Variables */
const helper = new Helper


/* Application Entry Point */
const root  = document.getElementById('root');




/* Exported Functions */



/* React Context Declarations  */
export const NotateContext = React.createContext()


/* Event Listeners */
chrome.runtime.onMessage.addListener(()=>{
	
})


/* App Component */
const Notate = () => {
	const [ wallpaperTheme, setWallpaperTheme ] = React.useState(false)

	  /* React useState Hooks */
	const NOTATE_CONTEXT = {
		NOTE_CONTEXT: React.useState(null),
		NOTEBOOK_CONTEXT: React.useState(null),
		SEARCH_TERM_CONTEXT: React.useState(''),
		RECENT_NOTES_STATE_CONTEXT: React.useState(true),
		DRAG_TO_TRASH_STATE_CONTEXT: React.useState(false),
		DATABASE_CONTEXT: React.useState(null),
		SCROLL_STATE_CONTEXT: React.useState(true),
		REQUEST_CONTEXT: React.useState({ type: 'GET_DATABASE' }),
		CONF_MSG_CONTEXT: React.useState(false),
		THEME_CONTEXT: useTheme(wallpaperTheme)
	}

	const [selectedNote, setSelectedNote] = NOTATE_CONTEXT.NOTE_CONTEXT 
	const [selectedNotebook, setSelectedNotebook] = NOTATE_CONTEXT.NOTEBOOK_CONTEXT 
	const [searchTerm, setSearchTerm] = NOTATE_CONTEXT.SEARCH_TERM_CONTEXT 
	const [ database, setDatabase ] = NOTATE_CONTEXT.DATABASE_CONTEXT
	const [ scrollState, setScrollState ] = NOTATE_CONTEXT.SCROLL_STATE_CONTEXT 
	const [ request, makeRequest ] = NOTATE_CONTEXT.REQUEST_CONTEXT 
	const [ confMsgState, setConfMsgState ] = NOTATE_CONTEXT.CONF_MSG_CONTEXT
	const [ recentsState, setRecentsState ] = NOTATE_CONTEXT.RECENT_NOTES_STATE_CONTEXT
	const  theme = NOTATE_CONTEXT.THEME_CONTEXT 





	const [ notification, setNotification ] = React.useState(new NotificationHandler);


	const [ devbool, setDevbool ] = React.useState(false)
	
	
	  /* Internal Component Functions */
	
	
	  const handleSearch = (term) => { setSearchTerm(term) };
	

	/* React.useEffect Hook */
	React.useEffect(()=>{
		helper.visual.changeScrollState(scrollState)
	}, [scrollState])


	React.useEffect(()=>{
		if (database) {
			setWallpaperTheme(database?.inventory?.USER_CONFIGURATION[0]?.Notate?.page?.backgroundWallpaper?.value)	
		}
	},[database])



	React.useEffect(() => {
		const asyncEffect = async () => {
			if (request?.type) {
				// Since both focused user data objs cannot be truthy at a given point
				// in the app's env, we can easily determine with a simple OR statement
				// what user data obj is being saved to IDB. will change if our needs change
				// in the future.
				//const target = selectedNote || selectedNotebook


				// This should always correctly filter for the correct store no matter 
				// selectedNotebook's value. If target is null, store's val will not matter
				// in this scenario.


				// payload object to be sent to background.js
				const payload = {
					request: request.type,
				}
				
				if (request.type === 'POST_DATABASE' || 'DELETE_DATABASE' && request?.data && request?.store) {
					payload.data = request.data
					payload.store = request.store
				}


				const result = await helper.database.operationRequest(payload)

				if (typeof result === 'object') {
					setDatabase(result)
					makeRequest(false)
					setRecentsState(true)

				} else {
					makeRequest({ type: 'RELOAD_DATABASE' })
				} 
			}
	
		}

		asyncEffect()
	
	}, [request]);
	
	
	  /* Component */
	  return (
		<div id="app" className="w-full h-screen flex flex-col flex-grow">
		  	<NotateContext.Provider value={NOTATE_CONTEXT}>
		  	<div id="wallpaper-theme" 
		  	className={`min-w-full flex flex-col flex-grow top-0 left-0 ${ theme.background || "" }`}>
					<ShadeComponent direction={"top"}/>
		  			<main id="notate" className="w-full h-full flex flex-col flex-grow mb-32 py-10 px-24">
						<header id="page-header" 
		  				className="text-center my-[1rem]">
						        <h1 id="page-title" 
		  					className={`text-[3rem] font-bold font-sans mb-2 ${theme.text.h1 || ""} `}>Notate</h1>
							        <p id="page-subtitle" 
		  						className={`text-lg font-semibold ${theme.text.sub || ""}`}>Combining The Worlds of Searches &amp; Note Taking</p>
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


ReactDOM.createRoot(root).render(
	<StrictMode>
				<Notate/>
	</StrictMode>
);


// dark-wood-bg cork-board-bg marble-chess-board-bg
