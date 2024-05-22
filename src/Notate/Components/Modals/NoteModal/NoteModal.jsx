import React from 'react';
import NoteHandler from '@universal/Handlers/NoteHandler';
import StorageHandler from '@universal/Handlers/StorageHandler';
import NotificationHandler from '@universal/Handlers/NotificationHandler';
import { NoteModalContext } from '../../../index.jsx';
import { NotificationContext } from '@universal/Components/NotificationMessenger.jsx';
import TrashLogo from '@assets/Designs/trash-logo.svg';
import { ScrollStateContext } from '../../../index.jsx';
import ConfirmationMsg, { ConfirmationMsgContext } from '../ConfirmationModal/ConfirmationMsg.jsx';
import ConfirmationMsgHandler from '../ConfirmationModal/ConfimrationMsgHandler.js'
import { RecentNotesUpdateStateContext } from '../../Recents/RecentNotes.jsx';
import TextEditor, { TextInputContext } from '@universal/Components/TextEditor/TextEditor.jsx'



export default function NoteModal() {

  	const [note, setNote ] = React.useContext(NoteModalContext)
  	const [notification, setNotification] = React.useContext(NotificationContext)
  	const [title, setTitle] = React.useState(note.title);		// on new note, value is undefined
  	const [content, setContent] = React.useState(note.content);	// on new note, value is undefined
  	const [ saveIsDisabled, changeSaveState ] = React.useState(true)
	const [ scrollState, setScrollState ] = React.useContext(ScrollStateContext)
	const [ confMsgState, setConfMsgState ] = React.useContext(ConfirmationMsgContext)
	const [ updateRecentNotesState, triggerRecentNotesUpdateState ] = React.useContext(RecentNotesUpdateStateContext)

	const initialNoteState = React.useRef({
		content: content,
		title: title
	})

	/* permittedToSave compares 2 conditions: 
	   	- noteChange: compares differences between initial state of note vs current state of note 
		- valuesEmpty: compares if either note properties provided are empty
	   
	   If the 1st and inverse of the 2nd condition is met, the user can Save */
	const noteChange = !(title == initialNoteState.current.title && content == initialNoteState.current.content) 
	const valuesEmpty = ((content == "" || content == undefined) || (title == "" || title == undefined))
	const permittedToSave = (noteChange && !valuesEmpty)
	

	const handleNoteDelete = () => {
		const confirmNoteDelete = async () => {
			await NoteHandler.deleteNote(note.id)
			exitModal()
		}

		setConfMsgState(new ConfirmationMsgHandler('Delete Note?',
								'Are you sure you want to delete this note? This is a permanent action!',
								'Delete',
								confirmNoteDelete,
								false))
	}

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };


	const exitModal = () => {
		setScrollState(true)
		setNote(null)
		triggerRecentNotesUpdateState(true)
	}

  const handleSaveClick = async () => {
    try {

	note.title = title;
	note.content = content;	
	
	if (note.id === undefined) {
		await NoteHandler.createNote(note.title, note.content, StorageHandler.NOTATE_ORIGIN_URL)
	} else {
		await StorageHandler.setNote(note); 
	}

        setNotification(notification.showInfo('Message Saved Successfully!'))
	

	      exitModal();
    } catch (error) {
	    
      console.error('Error saving note:', error);
	setNotification(notification.showError(`Error saving: ${error.message}`))
    }
  };


  React.useEffect(()=>{
	setScrollState(false)
  },[])


  return (
    <div id="modal" 
	  className="fixed flex items-center justify-center stz-10 left-0 top-0 w-full h-full  bg-black bg-opacity-40 ">
      <div id="modal-content" 

	  className="flex flex-col bg-[#2f2f2f] h-full   p-5 rounded-lg w-4/5 max-w-xl relative box-border max-h-[35rem]">

	  <div id="modal-topbar" 
	  	className="flex mb-5">

          	<span id="close" 
	  		className="text-gray-500 absolute top-3 right-5 text-3xl  font-bold cursor-pointer hover:text-red-300" onClick={exitModal}>&times;</span>


          	<h2 id="modal-title" 
	  		className="text-lg font-bold ml-2">Edit Note</h2>
	  </div>
        <input
          type="text"
          id="edit-note-title"
	  className="w-full py-1 px-2 my-2 inline-block border-none rounded bg-[#444] text-white text-base outline-none"
          placeholder="What are we researching...?"
          value={title}
          onChange={handleTitleChange}
        />
	<TextInputContext.Provider value={[ content, setContent ]}>
			<TextEditor TailwindClassNames={"fill-gray-200 stroke-gray-200"}/>	
	</TextInputContext.Provider>
	<div id="btn-ctrl-center"
		className="flex mt-2 space-x-3">

	        <button id="save-btn" 
	  		className={`${ permittedToSave ? "bg-green-600" : "bg-gray-500"  } h-12 text-white py-3 px-4 border-none rounded cursor-pointer w-full text-base ${permittedToSave ? "hover:bg-green-700" : ""} trans-ease`}
	  		disabled={permittedToSave ? false : true}
	  		onClick={handleSaveClick}>Save
		</button>
		<button id="delete-btn"
			className="size-12 bg-red-400 rounded flex items-center justify-center"
			onClick={handleNoteDelete}>
			<TrashLogo className="size-10 fill-transparent stroke-gray-50 stroke-[1.5]"/>
		</button>

	</div>
      </div>
    </div>
  );
}
