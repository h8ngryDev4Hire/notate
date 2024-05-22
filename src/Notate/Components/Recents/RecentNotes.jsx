import React from 'react';
import NoteCard from '@universal/Components/NoteCard.jsx';
import NewNoteBtn from './NewNoteBtn.jsx';
import NotebookCard from '@universal/Components/NotebookCard.jsx';
import NoteModal from '../Modals/NoteModal/NoteModal.jsx';
import NotebookModal from '../Modals/NotebookModal/NotebookModal.jsx';
import StorageHandler from '@universal/Handlers/StorageHandler';
import NotebookHandler from '@universal/Handlers/NotebookHandler';
import { NoteModalContext } from '../../index.jsx';
import { NotificationContext } from '@universal/Components/NotificationMessenger.jsx';


export const RecentNotesUpdateStateContext = React.createContext()


export default function RecentNotes({ searchTerm }) {
  const [notes, setNotes] = React.useState([]);
  const [notebooks, setNotebooks] = React.useState([]);
  const [selectedNote, setSelectedNote] = React.useContext(NoteModalContext);
  const [selectedNotebook, setSelectedNotebook] = React.useState(null);
  const [ updateState, setUpdateState ] = React.useContext(RecentNotesUpdateStateContext)
  const [notification, setNotification] = React.useContext(NotificationContext)




    const fetchStorageData = async () => {
      const fetchedNotes = await StorageHandler.getNotes();
      const fetchedNotebooks = await StorageHandler.getNotebooks();
      setNotes(fetchedNotes);
      setNotebooks(fetchedNotebooks);
    };

	const notebookUpdatedViaDragDrop = async (notebook, note) => {
		try {
			await notebook.assignNoteToCollection(note)
			setUpdateState(true)
		} catch (e) {
			console.error(`Error making changes: ${e}`)
			setNotification(notification.showError(`Error saving changes to notebook: ${e.message}`))
		}
	}

  React.useEffect(() => { 
	fetchStorageData()
  	setUpdateState(false)
  	}, [updateState]);

  const handleNoteClick = (note) => {
    setSelectedNote(note)
  };

  const handleNotebookClick = (notebook) => {
    setSelectedNotebook(notebook);
  };

  const handleModalClose = () => {
    setSelectedNote(null);
    setSelectedNotebook(null);
  };

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

	const sortedNotes = filteredNotes.sort((noteA, noteB) => {
		const dateA = new Date(noteA.modified)
		const dateB = new Date(noteB.modified)
		return dateB - dateA
	})

  const filteredNotebooks = notebooks.filter((notebook) =>
    notebook.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

	const sortedNotebooks = null



  return (
	<div id="recent-notes" className="mt-10 w-full flex flex-col items-center justify-center">
	  <header id="recent-notes-header"
	  	className="flex flex-row w-full justify-between mb-5">
		<h2 id="recent-notes-title" className="text-2xl font-semibold text-gray-200 mb-5">Your Recent Notes...</h2>
	  	<NewNoteBtn/>
	  </header>
	
    	<div id="recent-notes-container" className="grid grid-cols-4 gap-10 w-[85%]">
 		{sortedNotes.map((note, index) => {
			return <NoteCard key={index} 
	      			note={note} 
	      			onClick={() => handleNoteClick(note)}/>
      		})}
      		{filteredNotebooks.map((notebook, index) => {
	      		return (
        			<NotebookCard 	      
	      				key={index} 
	      				notebook={notebook} 
	      				onNotebookClick={() => handleNotebookClick(notebook)}
	      				onNoteClick={handleNoteClick}
	      				updatesDispatcher={notebookUpdatedViaDragDrop}/>
      		)})}

      		{selectedNotebook && <NotebookModal notebook={selectedNotebook} onClose={handleModalClose} />}
    	</div>
</div>
  );
}
