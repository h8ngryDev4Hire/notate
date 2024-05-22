import React from 'react';
import BoldIcon from '../../../Assets/Toolbar/bold-icon.svg';
import ItalicIcon from '../../../Assets/Toolbar/italics-icon.svg';
import UnderlineIcon from '../../../Assets/Toolbar/underline-icon.svg';
import StrikethroughIcon from '../../../Assets/Toolbar/strikethrough-icon.svg';

export default function FontStylingCtrls() {
  const handleFormatClick = (formatName) => {
    document.execCommand(formatName, false, null);
  };

	return (
	<div id="font-styling-controls"
	      className="flex space-x-1">
	      <button
	        id="bold-btn"
	        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
	        onClick={() => handleFormatClick('bold')}
	      >
	        <BoldIcon className="size-3 fill-inherit"/>
	      </button>
	      <button
	        id="italic-btn"
	        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
	        onClick={() => handleFormatClick('italic')}
	      >
	       <ItalicIcon className="size-3 fill-inherit"/> 
	      </button>
	      <button
	        id="underline-btn"
	        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
	        onClick={() => handleFormatClick('underline')}
	      >
	       <UnderlineIcon className="size-3 fill-inherit"/> 
	      </button>
	      <button
	        id="strikethrough-btn"
	        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
	        onClick={() => handleFormatClick('strikeThrough')}
	      >
	        <StrikethroughIcon className="size-3 fill-inherit"/> 
	      </button>
	</div>
	)
}
