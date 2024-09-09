import React from 'react';
import { NotateContext  } from '@notate/Notate.jsx';

import NoteModalTopbar from './Topbar.jsx'
import NoteModalBottombar from './Bottombar.jsx'
import NoteModalInput from './Input.jsx'



export const NoteModalContext = React.createContext()


export default function NoteModal() {
	const { NOTE_CONTEXT,
		RECENT_NOTES_STATE_CONTEXT,
		NOTATE_DB_CONTEXT,
		USER_CONFIGURATION_DB_CONTEXT,
		SCROLL_STATE_CONTEXT 
	} = React.useContext(NotateContext)

  	const [note, setNote ] = NOTE_CONTEXT
	const [ updateRecentNotesState, triggerRecentNotesUpdateState ] = RECENT_NOTES_STATE_CONTEXT
	const [ userconfigurationdb ] = USER_CONFIGURATION_DB_CONTEXT 
	const [ scrollState, setScrollState ] = SCROLL_STATE_CONTEXT 

	const NOTE_MODAL_CONTEXT = {
		TITLE_CONTEXT: React.useState(note.title), // on new note, value is undefined
		CONTENT_CONTEXT: React.useState(note.content),	// on new note, value is undefined 

		//TODO : fix color context not defaulting to config value on new note
		COLOR_CONTEXT: React.useState(note?.color?.name || userconfigurationdb?.inventory?.USER_CONFIGURATION[0]?.Notate?.noteModal?.preferredColor?.value)
	}


	const [transition, setTransition] = React.useState(false)
	const [mouseDownTarget, setMouseDownTarget] = React.useState(null);

	const modalRef = React.useRef(null);

	const handleMouseDown = (e) => {
		setMouseDownTarget(e.target);
	};


	const handleMouseUp = (e) => {
		if (e.target === e.currentTarget && mouseDownTarget && !modalRef.current.contains(mouseDownTarget)) {
			exitModal();
		}
		
		setMouseDownTarget(null);
	};

	const exitModal = async () => {
		setTransition(false)
		await new Promise(resolve => setTimeout(resolve, 300))
		setScrollState(true)
		triggerRecentNotesUpdateState(true)
	}


	const handlePreventingEventPropagation = (e) => { e.stopPropagation() }


  	React.useEffect(()=>{
		if (note) setTransition(true)
		setScrollState(false)
	},[note])


  return (
    <div id="note-modal-container" 
    className={`trans-ease fixed flex justify-center z-modal left-0 top-0 w-full h-full ${transition ? "bg-black bg-opacity-40" : "bg-transparent" }`}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}>
      <div id="modal" 
      ref={modalRef}
      className={`trans-ease flex flex-col mt-[100vh] ${ transition ? "-translate-y-[100%]" : "" } bg-[#2f2f2f] max-h-[45rem] h-full  p-5 rounded-lg max-w-[50rem] w-full relative box-border`}
      onClick={handlePreventingEventPropagation}>
	  <NoteModalContext.Provider value={NOTE_MODAL_CONTEXT}>
		<NoteModalTopbar onExit={exitModal} />

		<NoteModalInput onExit={exitModal}/>

		<NoteModalBottombar onExit={exitModal}/> 
	  </NoteModalContext.Provider>
	  
      </div>
    </div>
  );
}
