import React, { Suspense } from 'react';
import { NOTATE_DB, ERROR_LOGGING_DB, USER_CONFIGURATION_DB } from '@background/background.js'
import DisplayMode from './DisplayMode/DisplayMode.jsx';
import Loading from '@universal/Components/Loading/RecentsLoading.jsx'

import { NotateContext } from '@notate/Notate.jsx';
import { NotificationContext } from '@universal/Components/NotificationMessenger.jsx';



export const RecentNotesContext = React.createContext()



export default function RecentNotes({ searchTerm }) {
	const { 
		NOTE_CONTEXT, 
		NOTEBOOK_CONTEXT, 
		RECENT_NOTES_STATE_CONTEXT, 
		NOTATE_DB_CONTEXT, 
		REQUEST_CONTEXT,
		MODAL_STATE_CONTEXT,
		THEME_CONTEXT
	} = React.useContext(NotateContext)

	const [selectedNote, setSelectedNote] = NOTE_CONTEXT
	const [selectedNotebook, setSelectedNotebook] = NOTEBOOK_CONTEXT
	const [ modalState, setModalState ] = MODAL_STATE_CONTEXT
  	const [database, setDatabase] = NOTATE_DB_CONTEXT 
  	const [ request, makeRequest ] = REQUEST_CONTEXT 
  	const [ updateState, setUpdateState ] = RECENT_NOTES_STATE_CONTEXT
  	const [notification, setNotification] = React.useContext(NotificationContext)

	const theme = THEME_CONTEXT

	const RECENT_NOTES_CONTEXT = {
		NOTE_LIST_CONTEXT: React.useState([]),
		NOTEBOOK_LIST_CONTEXT: React.useState([]),
		FUNCTIONS: {},
		SEARCH_TERM_CONTEXT: React.useState(searchTerm || ''),
		SORTED_ITEMS_CONTEXT: React.useState(false),
		ACTIVE_SEARCH_CONTEXT: React.useState(false)
	}

	const [ notes, setNotes ] = RECENT_NOTES_CONTEXT.NOTE_LIST_CONTEXT
	const [ notebooks, setNotebooks ] = RECENT_NOTES_CONTEXT.NOTEBOOK_LIST_CONTEXT
	const [ search, setSearch ] = RECENT_NOTES_CONTEXT.SEARCH_TERM_CONTEXT

	const [ hoverState, setHoverState ] = React.useState(false)
	const [ noteDragState, setNoteDragState ] = React.useState(false)


    	const readStorageData = () => {
      		const NOTES = database?.inventory?.NOTES
      		const NOTEBOOKS = database?.inventory?.NOTEBOOKS

      		if (NOTES && NOTEBOOKS) {
	      		setNotes(NOTES);
	      		setNotebooks(NOTEBOOKS);
      		}
    	};


  	const handleNoteClick = (note) => { if (!selectedNotebook) {
			setSelectedNote(note)
			setModalState(true)
		} 
	};

 	const handleNotebookClick = (notebook) => { if (!selectedNote) {
			setSelectedNotebook(notebook);
			setModalState(true)
		} 
	};

  	const handleModalClose = () => {
    		setSelectedNote(null);
    		setSelectedNotebook(null);
  	};


	const notebookDragDropListener = async (notebook, note) => {
		try {
			notebook.collection.push(note.id)
			await makeRequest({ 
				type: 'POST_DATABASE', 
				data: notebook, 
				store: 'NOTEBOOKS',
				database: NOTATE_DB
			})	
			setUpdateState(true)
		} catch (e) {
			console.error(`Error making changes: ${e}`)
			setNotification(notification.showError())
		}
	}

	RECENT_NOTES_CONTEXT.FUNCTIONS = {
		HANDLE_NOTE_CLICK: handleNoteClick,
		HANDLE_NOTEBOOK_CLICK: handleNotebookClick,
		HANDLE_MODAL_CLOSE: handleModalClose,
		NOTEBOOK_DRAGDROP_LISTENER: notebookDragDropListener 
	}


	const handleNoteDrop = async (event) => {
		event.preventDefault()

		if (event.target.closest('#notebook-card-container') === null 
		 && event.target.closest('#recent-notes') 
		 && hoverState) {
			const fetchedData = event.dataTransfer.getData('text/plain')
			try {

				const note = JSON.parse(fetchedData)


				if (note.id && noteDragState && typeof noteDragState === 'string') {
					const id = parseInt(noteDragState)
					const [ target ] = database.inventory.NOTEBOOKS.filter( notebook => notebook.id === id )

					target.collection = target.collection.filter( id => {
						if (id !== note.id) return id
					})

					

					await makeRequest({
						type: 'POST_DATABASE',
						data: target,
						store: 'NOTEBOOKS',
						database: NOTATE_DB
					})
				}
			} catch (error) {
				error
				debugger
			}
		}



		setHoverState(false)	


	}

	const handleNoteHover = (event) => {
		event.preventDefault()

		if (noteDragState && typeof noteDragState === 'string') {
			setHoverState(event.type === 'dragover')
		}
	}

	const handleDragStart = (event) => {
		const origin = event.target.closest('#notebook-card-container')
		const associatedNotebookID = origin?.children[0]?.getAttribute('data-notebook-id')

		if ( origin && typeof associatedNotebookID === 'string') {
			setNoteDragState(associatedNotebookID)
		} else {
			setNoteDragState(false)
		}
	}


  	React.useEffect(() => { 	
		if (!modalState) {
			setSelectedNote(null) 
			setSelectedNotebook(null)
		} 	

		readStorageData()
  		setUpdateState(false)

  	}, [updateState, database]);


	React.useEffect(()=>{ setSearch(searchTerm) },[searchTerm])


  return (
	<RecentNotesContext.Provider value={RECENT_NOTES_CONTEXT}>
		<div 
		 id="recent-notes" 
	  	 className={`
		 	w-full flex-grow  flex flex-col items-center 
			rounded-xl mx-auto mt-10 trans-ease-all p-[1rem]
			${ hoverState ? "bg-black bg-opacity-25" : "" }
		 `}
		 onDrop={handleNoteDrop}
		 onDragOver={handleNoteHover}
		 onDragEnd={handleNoteHover}
		 onDragStart={handleDragStart}
		>
	  		<header 
			 id="recent-notes-header"
	  		 className="flex flex-row w-full max-h-[3rem] justify-between mb-5"
			>
				<h2 
				 id="recent-notes-title" 
	  			 className={`
				 	text-2xl playfair-regular font-extrabold 
					${theme.text.h2 || ""} mb-5 trans-ease-all
					${hoverState ? "text-white" : ""}
				`}>
	  				Your Recent Notes...
	  			</h2>
	  		</header>
			
	  		<Suspense fallback={<Loading/>}>
	  			<DisplayMode/>
			</Suspense>

		</div>
	</RecentNotesContext.Provider>
  );
}
