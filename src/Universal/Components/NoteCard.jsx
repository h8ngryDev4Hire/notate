import React from 'react';

export default function NoteCard({ note, stackClass=false, onClick, onDragStart }) {
	const NOTE_CONTENT_ELEMENT = `note-${note?.id}-content`

	//const [ content, setContent ] = React.useState('')

	const noteContentRef = React.useRef(null)


	const dragHandler = (event) => {
		const JSONified = JSON.stringify(note)
		event.dataTransfer.setData('text/plain', JSONified);
	}

	const cleanContent = () => {
		const content = document.getElementById(NOTE_CONTENT_ELEMENT)
		if (content) {
			let text = ''

			const innerText = content.innerText
			content.innerHTML = innerText 

			text += content.innerText

			Array.from(content.children).forEach( child => {
				text += child.innerText
			})


			content.innerHTML = text
		} 
	}
	


	React.useEffect(()=>{
	//	if (note?.content) {
	//		setContent(note.content)
	//		contentTag.textContent = content
	//	}
		const ref = noteContentRef.current

		if (ref) {
			ref.textContent = note.content
			cleanContent()
			 
		}
	},[note, noteContentRef.current])


  return (
 
	<div  
	 id={`note-card-${note.id}`} 
	 className={`
		 ${ note?.color?.styles?.card ? note.color.styles.card : 'bg-yellow-200' } 
		 ${ stackClass ? stackClass : '' }  
		 playfair-regular
		 flex flex-col min-h-[170px] max-h-[170px] min-w-[230px] max-w-[230px] rounded shadow-lg 
		 trans-ease transform hover:-translate-y-5 cursor-pointer
	 `} 
	 onClick={onClick}
	 onDragStart={dragHandler}
	 draggable
	>
		<header 
	  	 id="note-top" 
	  	 className={`
			 w-full h-4 min-h-4 rounded-t
			 ${ note?.color?.styles?.top ? note.color.styles.top : 'bg-yellow-400' } 
		`}/>
	  	<div 
	  	 id="note-card" 
	  	 className="pt-3 px-3 pb-5 flex flex-col flex-grow space-y-1 overflow-hidden"
	  	>
      			<h3 
	  		 id="note-title" 
	  		 className="min-h-[28px] text-lg font-semibold mt-0 text-black overflow-hidden text-ellipsis whitespace-nowrap"
	  		>
	  			{note.title}
	  		</h3>

	  		<div 
	  		 id={NOTE_CONTENT_ELEMENT} 
	  		 className=" text-base mb-0 text-gray-800 ml-2  whitespace-normal break-words overflow-hidden"
	  		 ref={noteContentRef}
	  		/>
	 	</div>
    </div>

  );
}


