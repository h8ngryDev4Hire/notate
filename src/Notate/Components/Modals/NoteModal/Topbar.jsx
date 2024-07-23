import React from 'react';

export default function NoteModalTopbar({onExit}) {
	return (
	
		<>
	  		<div id="modal-topbar" 
			className="flex mb-5">

          			<span id="close" 
				className="trans-ease text-gray-500 absolute top-3 right-5 text-3xl  font-bold cursor-pointer hover:text-red-300" 
				onClick={onExit}>
					&times;
				</span>


          			<h2 id="modal-title" 
				className="text-lg font-bold ml-2">
					Edit Note
				</h2>
	  		</div>
		</>

	)
}
