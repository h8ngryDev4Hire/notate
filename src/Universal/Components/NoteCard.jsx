import React from 'react';

export default function NoteCard({ note, stackClass=false, onClick, onDragStart }) {
	const NOTE_CONTENT_ELEMENT = `note-${note.id}-content`
	const dragHandler = (event) => {
		const JSONified = JSON.stringify(note)
		event.dataTransfer.setData('text/plain', JSONified);
	}

	const cleanContent = async () => {
		const content = document.getElementById(NOTE_CONTENT_ELEMENT)
		content.innerHTML = content.innerText
	}
	


	React.useEffect(()=>{
		const contentTag = document.getElementById(NOTE_CONTENT_ELEMENT);
		contentTag.innerHTML = note.content

		cleanContent()
	},[])

  return (
 
	<div  id="note-card" 
	  className={`${ stackClass ? stackClass : 'bg-yellow-200' } flex flex-col min-h-[170px] max-h-[170px] min-w-[230px] max-w-[230px] rounded-lg shadow-lg trans-ease transform hover:-translate-y-5`} 
	  onClick={()=>{onClick()}}
	  onDragStart={dragHandler}
	  draggable>
		<header id="" className="w-full h-4 min-h-4 bg-yellow-400 rounded-t-lg">
	  	</header>
	  	<div id="" className="pt-3 pl-5 pr-5 pb-5 flex flex-col space-y-1 overflow-hidden">
      			<h3 id="note-title" className="min-h-[28px] text-lg font-medium mt-0 text-black overflow-hidden text-ellipsis ">{note.title}</h3>
	  		<div id={NOTE_CONTENT_ELEMENT} 
	  			className="text-base mb-0 text-gray-800 text-ellipsis whitespace-nowrap"></div>
	 	</div>
    </div>

  );
}
