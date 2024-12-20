import React from 'react';
import NoteCard from './NoteCard.jsx';

export default function NotebookCard({ notebook, onNoteClick, onNotebookClick, updatesDispatcher, inventory }) {

 	const [showNotes, setShowNotes] = React.useState(false);
	const [noteList, populate] = React.useState([]);

	/* Function that grabs notes via StorageHandler which requires
	using a Promise object */
	const populateNotebook = async () => {
		if (inventory?.NOTES) {
			const notes = inventory.NOTES

			const filteredNotes = notes.filter(note => notebook.collection.includes(note.id)) 
	
			populate(filteredNotes)
		}

	}

	const handleNoteDrop = async (event) => {
		event.preventDefault();
		const fetchedData = event.dataTransfer.getData('text/plain')
		const parsedData = JSON.parse(fetchedData) 
		const note = sanitizeNoteData(parsedData) 
		await updatesDispatcher(notebook, note)
	}

	const sanitizeNoteData = (note) => {
		// add more props if any parts of application
		// attach props for specific use cases
		delete note?.hits
		return note
	}

	const dragHandler = (event) => {
		if (event.target.id === 'notebook-card-container') {
			const JSONified = JSON.stringify(notebook)
			event.dataTransfer.setData('text/plain', JSONified)
		}
	}


	// update this to add more visual functionality
	const handleNoteDragOver = (event) => {
		// Needed for event propagation | onDrop event to fire
		event.preventDefault();
	}

	React.useEffect(()=> {populateNotebook()},[inventory])



  	return (
		<div 
		 id="notebook-card-container" 
		 className={`
			 relative group z-0 trans-ease transform hover:-translate-y-5 
			 playfair-bold cursor-pointer
		 `}
		 onDragStart={dragHandler}
		 draggable
		>
		
			  {/* Notebook Cover Designs */}
			<div 
			 id={`notebook-card-${notebook.id}`} 
			 data-notebook-id={notebook.id}
			 className="flex  relative  min-h-[170px] max-h-[170px] min-w-[230px] max-w-[230px]  rounded shadow-xl  bg-[#bf8040] z-[5] hover:z-[20]" 
			 onClick={onNotebookClick}
			 onDrop={handleNoteDrop}
			 onDragOver={handleNoteDragOver}
		    	>
				<div id="notebook-cover-side" className={`min-w-[1.5rem] bg-[#86592d] rounded-l`}/>
				<div id="" className={`flex-grow overflow-hidden p-4`}>
			      		<h3 
					 id="notebook-title" 
					 className="text-lg font-medium mt-0 text-white overflow-hidden text-ellipsis whitespace-nowrap"
					>{notebook.title}</h3>
			      		<p 
					 id="notebook-description" 
					 className="text-base mb-0 text-gray-200 overflow-hidden text-ellipsis whitespace-nowrap"
					>{notebook.description}</p>

				</div>

		    	</div>
		
			  {/* Where NoteCard Components are populated */}
			<div 
			 id="note-card-group" 
			 className="absolute w-full top-0 z-0 max-h-[170px]"
			>{/* <-- need to add tailwind classes to create a stacked visual effect */}  
		        {			
				noteList.slice(0, 4).map((note, index) => {
					// group-hover:z-[6] group-hover:z-[7] group-hover:z-[8] group-hover:z-[9]
					const pos = (((index+1)*(-1))+10).toString() 
			
					//  group-hover:-translate-y-[40px] group-hover:-translate-y-[80px] group-hover:-translate-y-[120px] group-hover:-translate-y-[160px]
					const stack = ((index*40)+40).toString() 
					const colors = ['bg-yellow-250', 'bg-yellow-300','bg-yellow-350','bg-yellow-400'] //
							
					return (
						<div id="note-card-stack-item" 
						 key={index}
			     			 className={`relative group-hover:z-[${pos}] transition duration-200 ease-in-out transform hover:-translate-y-5`}
						> 
							<NoteCard 
							 note={note}  
							 stackClass={`absolute  top-full left-0 w-full transition duration-200 ease-in-out transform group-hover:-translate-y-[${stack}px]`} 
							 onClick={() => onNoteClick(note)} 
							/>
						</div>
					)
				})
			}
			</div>
		</div>
  );
}

