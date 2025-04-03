import React from 'react';
import AlignLeft from '../../../Assets/Toolbar/align-left-icon.svg';
import AlignRight from '../../../Assets/Toolbar/align-right-icon.svg';
import AlignCenter from '../../../Assets/Toolbar/align-center-icon.svg';
import AlignJustify from '../../../Assets/Toolbar/align-justify-icon.svg';

export default function AlignmentCtrls() {
  const handleAlignmentClick = (alignment) => {
    document.execCommand('justifyLeft', false, null);
    document.execCommand(`justify${alignment.charAt(0).toUpperCase() + alignment.slice(1)}`, false, null);

  };

  return (
    <div id="alignment-controls" className="flex space-x-1">
      <button
        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
        onClick={() => handleAlignmentClick('left')}
      >
        <AlignLeft className="size-3 fill-inherit"/>
      </button>
      <button
        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
        onClick={() => handleAlignmentClick('center')}
      >
        <AlignCenter className="size-3 fill-inherit"/>
      </button>
      <button
        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
        onClick={() => handleAlignmentClick('right')}
      >
        <AlignRight className="size-3 fill-inherit"/>
      </button>
      <button
        className="flex items-center justify-center size-6 p-1 text-sm rounded   backdrop-filter backdrop-brightness-[.80]"
        onClick={() => handleAlignmentClick('justify')}
      >
        <AlignJustify className="size-3 fill-inherit"/>
      </button>
    </div>
  );
}
