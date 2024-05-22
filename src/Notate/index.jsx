import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import SearchBar from './Components/Search/SearchBar.jsx';
import RecentNotes, { RecentNotesUpdateStateContext } from './Components/Recents/RecentNotes.jsx';
import NoteModal from './Components/Modals/NoteModal/NoteModal.jsx';
import NotificationMsg, { NotificationContext } from '@universal/Components/NotificationMessenger.jsx';
import NotificationHandler from '@universal/Handlers/NotificationHandler.js';
import ConfirmationMsg, { ConfirmationMsgContext } from './Components/Modals/ConfirmationModal/ConfirmationMsg.jsx';
import ConfirmationMsgHandler from './Components/Modals/ConfirmationModal/ConfimrationMsgHandler.js';


/* Application Entry Point */
const root  = document.getElementById('root');



/* React Context Declarations  */
export const NoteModalContext = React.createContext()
export const ScrollStateContext = React.createContext()


/* Exported Functions */


/* App Component */
const Notate = () => {
  const [selectedNote, setSelectedNote] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [ notification, setNotification ] = React.useState(new NotificationHandler);
  const [ scrollState, setScrollState ] = React.useState(true)
  const [ confMsgState, setConfMsgState ] = React.useState()
  const [ updateRecentNotesState, triggerRecentNotesUpdateState ] = React.useState(true)

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const changeScrollState = async (bool) => {
		const bodyClasses = document.body.classList 
		const disabledClassName = "overflow-hidden"
		const classExists = bodyClasses.contains(disabledClassName)	

		const classRemover = (bool && classExists) ? bodyClasses.remove(disabledClassName) : null
		const classAdder = (!bool && !classExists) ? bodyClasses.add(disabledClassName) : null 
  }


	React.useEffect(()=>{changeScrollState(scrollState)},[scrollState])


  return (
	  <StrictMode>
	<ScrollStateContext.Provider value={[ scrollState, setScrollState ]}>
		<ConfirmationMsgContext.Provider value={[ confMsgState, setConfMsgState ]}>
		    <div id="app" className="min-w-[90%]  my-10 flex-grow">
		      <header id="page-header" className="text-center mb-10 ">
		        <h1 id="page-title" className="text-4xl font-bold mb-2">Notate</h1>
		        <p id="page-subtitle" className="text-lg text-gray-400">Combining The Worlds of Searches &amp; Note Taking</p>
		      </header>
			  <NotificationContext.Provider value={[ notification, setNotification ]}>
	  				<RecentNotesUpdateStateContext.Provider value={[ updateRecentNotesState, triggerRecentNotesUpdateState ]}>

						<SearchBar onSearch={handleSearch} />
						<NoteModalContext.Provider value={[selectedNote, setSelectedNote]} >
		      					<RecentNotes onNoteClick={handleNoteClick} searchTerm={searchTerm} />
		      					{selectedNote && <NoteModal/>}
	  		    				{ confMsgState && <ConfirmationMsg/> }
			  			</NoteModalContext.Provider>
			  		  	{ notification?.active && <NotificationMsg/> }

	  				</RecentNotesUpdateStateContext.Provider>

			  </NotificationContext.Provider>
		
		    </div>
		</ConfirmationMsgContext.Provider>
	</ScrollStateContext.Provider>
	  </StrictMode>
  );
}

ReactDOM.createRoot(root).render(<Notate/>);
