import React from 'react';
import NoteCard from '@universal/Components/NoteCard.jsx';
import StorageHandler from '@universal/Handlers/StorageHandler';

export default function NotebookModal({ notebook, toggleModal }) {
	const [notes, populateNotes] = React.useState([]);

	const fetchNotes = async () => {
		const notes = await StorageHandler.getNotes();
		const collection = []

		for (const note of notes) {
			for (const childNote of notebook.collection) {
				if (note.id === childNote) {
					collection.push(note)
						
				}
			}
		}
		populateNotes(collection)
	}

	React.useEffect(() => {fetchNotes()}, [])


  return (
    <div id="modal" className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-40 ">
      <div id="modal-content" className="bg-[#2f2f2f] mx-auto my-60 p-5 rounded-lg w-4/5 max-w-xl relative box-border max-h-80vh">
        <span id="close" 
	  	className="text-gray-500 absolute top-3 right-5 text-3xl  font-bold cursor-pointer hover:text-red-300" 
	  	onClick={toggleModal}>&times;
	</span>
        <h2 id="modal-title" className="text-lg font-bold ml-2">{notebook.title}</h2>
        <p>{notebook.description}</p>
        <div id="notebook-notes-container" className="inline-block">
	  {console.log(notebook.collection)}
          {notebook.collection.map((note, index) => (
		  (()=>{
			console.log(note)	
			return <NoteCard key={index} note={note} />;
		  })() 
          ))}
        </div>
      </div>
    </div>
  );
}
