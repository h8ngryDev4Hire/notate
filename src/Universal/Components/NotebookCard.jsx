import React from 'react';
import NoteCard from './NoteCard.jsx';
import StorageHandler from '@universal/Handlers/StorageHandler.js';
import NotebookHandler from '@universal/Handlers/NotebookHandler.js';

export default function NotebookCard({ notebook, onNoteClick, onNotebookClick, updatesDispatcher }) {
 	const [showNotes, setShowNotes] = React.useState(false);
	const [noteList, populate] = React.useState([]);

	/* Function that grabs notes via StorageHandler which requires
	using a Promise object */
	const populateNotebook = async () => {
		const notes = await NotebookHandler.getNoteByID(notebook) 
		populate(notes)	
		
	}

	const handleNoteDrop = async (event) => {
		event.preventDefault();
		const parsedData = event.dataTransfer.getData('text/plain')
		const note = JSON.parse(parsedData)
		await updatesDispatcher(notebook, note)
	}




	const handleNoteDragOver = (event) => {
		event.preventDefault();
	}

	React.useEffect(()=>{ populateNotebook() },[])


  return (
<div id="notebook-card-container" className="relative group z-0 trans-ease transform hover:-translate-y-5">

	  {/* Notebook Cover Designs */}
    <div id="notebook-card" 
	  className="relative p-5 min-h-[140px] max-h-[140px] rounded-lg shadow-xl rounded-t-xl bg-[#2f2f2f] z-[5] hover:z-[20]" 
	  data-notebook-id={notebook.id} 
	  onClick={()=>{ onNotebookClick(notebook) }}
	  onDrop={handleNoteDrop}
	  onDragOver={handleNoteDragOver}
	  >
      <h3 id="notebook-title" className="text-lg font-medium mt-0 text-gray-200">{notebook.title}</h3>
      <p id="notebook-description" className="text-base mb-0 text-gray-400">{notebook.description}</p>
    </div>

	  {/* Where NoteCard Components are populated */}
	<div id="note-card-group" className="absolute w-full top-0 z-0 ">{/* <-- need to add tailwind classes to create a stacked visual effect */}  
        {noteList.slice(0, 4).map((note, index) => {
		const pos = (((index+1)*(-1))+10).toString() // group-hover:z-[6] group-hover:z-[7] group-hover:z-[8] group-hover:z-[9]
		const stack = ((index*40)+40).toString() //  group-hover:-translate-y-[40px] group-hover:-translate-y-[80px] group-hover:-translate-y-[120px] group-hover:-translate-y-[160px]
		const colors = ['bg-[#2b2b2b]', 'bg-[#292929]','bg-[#262626]','bg-[#242424]'] //
			
		return (
			<div id="note-card-stack-item" 
     				className={`relative group-hover:z-[${pos}] transition duration-200 ease-in-out transform hover:-translate-y-5`}> 
				<NoteCard 
					key={index*100}
					note={note}  
					stackClass={`absolute ${colors[index]} top-full left-0 w-full transition duration-200 ease-in-out transform group-hover:-translate-y-[${stack}px]`} 
					onClick={() => onNoteClick(note)} />
			</div>
		)
	})}
      </div>
</div>
  );
}

