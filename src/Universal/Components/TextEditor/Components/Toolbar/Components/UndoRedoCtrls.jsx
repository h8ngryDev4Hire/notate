import React from 'react';
import UndoIcon from '../../../Assets/Toolbar/undo-icon.svg';
import RedoIcon from '../../../Assets/Toolbar/redo-icon.svg';

export default function UndoRedoCtrls() {
  const handleUndoClick = () => {
    document.execCommand('undo', false, null);
  };

  const handleRedoClick = () => {
    document.execCommand('redo', false, null);
  };	

	return (
	<div id="undo-redo-controls"
	     className="flex space-x-1 bg-inherit">
	      <button
	        id="undo-btn"
	        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
	        onClick={handleUndoClick}
	      >
	       <UndoIcon className="size-3 stroke-inherit"/> 
	      </button>
	      <button
	        id="redo-btn"
	        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
	        onClick={handleRedoClick}
	      >
	        <RedoIcon className="size-3 stroke-inherit"/>
	      </button>	
	</div>
	)
}
