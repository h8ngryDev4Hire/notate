import React from 'react';
import FontStylingCtrls from './Components/FontStylingCtrls.jsx';
import FontSizeCtrls from './Components/FontSizeCtrls.jsx';
import UndoRedoCtrls from './Components/UndoRedoCtrls.jsx';
import AlignmentCtrls from './Components/AlignmentCtrls.jsx';


export default function Toolbar({ControllerComponents}) {


  return (
    <div id="toolbar" className="flex  p-2 space-x-5">
	  <div id="default-toolbar-items"
	  	className="flex flex-grow space-x-5 items-center">
		  <FontStylingCtrls/>
		  <FontSizeCtrls/>
		  <AlignmentCtrls/>
		  <UndoRedoCtrls/>
	  </div>
	  <div id="custom-toolbar-items"
	  	className="flex items-center space-x-5">
		  {ControllerComponents}
	  </div>
    </div>
  );
}
