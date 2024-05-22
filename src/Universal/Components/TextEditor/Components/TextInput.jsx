import React from 'react';
import { TextInputContext } from '../TextEditor.jsx';

export default function TextInput() {

  const [text, setText] = React.useContext(TextInputContext);

  const textDisplayRef = React.useRef(null);

  const handleChange = (event) => {
    const content = event.target.innerHTML;
    const findLinks = formatLinks(content)
    setText(content);
  };

  const formatLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s<]+)/g;
    const product = text.replace(urlRegex, '<a href="$1">$1</a>');
    return product
  };

  const handleKeyDown = (event) => {

      if (event.key === 'Tab') {
      event.preventDefault();
      document.execCommand('insertText', true, '\t');
    } else if (event.ctrlKey && event.key === 'z') {
      event.preventDefault();
      document.execCommand('undo', false, null);
    } else if (event.ctrlKey && event.key === 'y') {
      event.preventDefault();
      document.execCommand('redo', false, null);
    } else {
	event.stopPropagation()
    }

    setText(event.target.innerHTML);
  };


  React.useEffect(() => {
	  const INPUT = document.getElementById('input-text-display')
	  INPUT.innerHTML = text || ''
  },[])



  return (
      <div
        id="input-text-display"
        ref={textDisplayRef}
        className="w-full h-full max-h-[100vh] p-2  rounded bg-inherit outline-none text-base"
        contentEditable
	suppressContentEditableWarning
        onInput={handleChange}
	onKeyDown={handleKeyDown}>
      </div>
  );
}
