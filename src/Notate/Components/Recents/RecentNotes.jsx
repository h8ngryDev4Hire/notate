import React from 'react';
import { NOTATE_DB, ERROR_LOGGING_DB, USER_CONFIGURATION_DB } from '@background/background.js'
import DisplayMode from './DisplayMode.jsx';

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
	  THEME_CONTEXT
  } = React.useContext(NotateContext)

  const [selectedNote, setSelectedNote] = NOTE_CONTEXT
  const [selectedNotebook, setSelectedNotebook] = NOTEBOOK_CONTEXT
  const [database, setDatabase] = NOTATE_DB_CONTEXT 
  const [ request, makeRequest ] = REQUEST_CONTEXT 
	const theme = THEME_CONTEXT


  const [ updateState, setUpdateState ] = RECENT_NOTES_STATE_CONTEXT
  const [notification, setNotification] = React.useContext(NotificationContext)


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


    const readStorageData = async () => {
      const NOTES = database?.inventory?.NOTES
      const NOTEBOOKS = database?.inventory?.NOTEBOOKS

      if (NOTES && NOTEBOOKS) {
	      setNotes(NOTES);
	      setNotebooks(NOTEBOOKS);
      }
    };


  	const handleNoteClick = (note) => { if (!selectedNotebook) setSelectedNote(note) };

 	const handleNotebookClick = (notebook) => { if (!selectedNote) setSelectedNotebook(notebook); };

  	const handleModalClose = () => {
    		setSelectedNote(null);
    		setSelectedNotebook(null);
  	};


	const notebookDragDropListener = async (notebook, note) => {
		try {
			notebook.collection.push(note.id)
			makeRequest({ 
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




  	React.useEffect(() => { 	
		if (!request) {
			setSelectedNote(null) 
			setSelectedNotebook(null)
		}	

		readStorageData()
  		setUpdateState(false)

  	}, [updateState, database]);


	React.useEffect(()=>{ setSearch(searchTerm) },[searchTerm])


  return (
	<RecentNotesContext.Provider value={RECENT_NOTES_CONTEXT}>
		<div id="recent-notes" 
	  	className="mt-10 w-full flex-grow  mx-auto flex flex-col items-center ">
	  		<header id="recent-notes-header"
	  		className="flex flex-row w-full max-h-[3rem] justify-between mb-5">
				<h2 id="recent-notes-title" 
	  			className={`text-2xl playfair-regular font-extrabold ${theme.text.h2 || ""} mb-5`}>
	  				Your Recent Notes...
	  			</h2>
	  		</header>
			
	  		<DisplayMode/>

		</div>
	</RecentNotesContext.Provider>
  );
}
