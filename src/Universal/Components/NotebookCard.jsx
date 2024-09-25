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
		const parsedData = event.dataTransfer.getData('text/plain')
		const note = JSON.parse(parsedData)
		await updatesDispatcher(notebook, note)
	}


	const dragHandler = (event) => {
		const JSONified = JSON.stringify(notebook)
		event.dataTransfer.setData('text/plain', JSONified)
	}


	// update this to add more visual functionality
	const handleNoteDragOver = (event) => {
		event.preventDefault();
	}

	React.useEffect(()=> {populateNotebook()},[inventory])



  	return (
		<div 
		 id="notebook-card-container" 
		 className={`
			 relative group z-0 trans-ease transform hover:-translate-y-5 
			 playfair-regular cursor-pointer
		 `}
		 onDragStart={dragHandler}
		 draggable
		>
		
			  {/* Notebook Cover Designs */}
			<div 
			 id="notebook-card" 
			 className="flex  relative  min-h-[170px] max-h-[170px] min-w-[230px] max-w-[230px]  rounded shadow-xl  bg-[#dfac5d] z-[5] hover:z-[20]" 
			 data-notebook-id={notebook.id} 
			 onClick={onNotebookClick}
			 onDrop={handleNoteDrop}
			 onDragOver={handleNoteDragOver}
		    	>
				<div id="" className={`min-w-[1.5rem] bg-[#b7823d] rounded-l`}/>
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

