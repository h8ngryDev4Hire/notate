import React from 'react'
import { createPortal } from 'react-dom'

const GhostEditor = React.forwardRef((props, ref) => {
  const ghostRef = React.useRef(null);

  const simulateBackspace = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'Backspace',
      bubbles: true,
      cancelable: true
    });
    ghostRef.current.dispatchEvent(event);
  };

	const handleTestClick = () => {
ghostRef.current.focus()

function setCursorPosition(element, position) {
  const range = document.createRange();
  const selection = window.getSelection();
  
  range.setStart(element.childNodes[0], position);
  range.collapse(true);
  
  selection.removeAllRanges();
  selection.addRange(range);
}

setCursorPosition(ghostRef.current, 4)

    const keyEvent = new KeyboardEvent('keydown', {
      key: "KeyA",
      bubbles: true,
      cancelable: false,
    });
    const clonedKeyEvent = cloneInto(keyEvent, window, { cloneFunctions: true });
    ghostRef.current.dispatchEvent(clonedKeyEvent);

	console.log('completed')
	}

  const handleDelete = (cursorInfo) => {
    if (!ghostRef.current) return null;

    ghostRef.current.focus()

    // Set ghost content and position cursor
    const range = document.createRange();
    const selection = document.getSelection();
    
    // Position cursor in ghost editor at same position
    range.setStart(cursorInfo.node, cursorInfo.offset);
    range.setEnd(cursorInfo.node, cursorInfo.offset);
    
    selection.removeAllRanges();
    selection.addRange(range);

    // Simulate backspace at cursor position
    simulateBackspace();

    return ghostRef.current.innerHTML;
  };

  React.useImperativeHandle(ref, () => ({
    performDelete: (cursorInfo) => handleDelete(cursorInfo),
    setContent: (html) => {
      if (ghostRef.current) {
        ghostRef.current.innerHTML = html;
      }
    }
  }));

  return createPortal(
    <>
	<button 
	  id="test-btn" 
	  onClick={handleTestClick}
	  className={`
	  fixed top-0 ml-[90%] w-[10rem] h-[5rem] bg-black z-[100000]`
	}/>
     <div
      ref={ghostRef}
      id="notate-ghost-editor"
      contentEditable
      suppressContentEditableWarning
      className="fixed bg-white z-[1000] w-full h-full top-0"
     /> 
    </>,

    document.body
  );
});

export default GhostEditor
