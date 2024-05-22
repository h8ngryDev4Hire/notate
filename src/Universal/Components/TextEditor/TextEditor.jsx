import React from 'react';
import TextInput from './Components/TextInput.jsx';
import Toolbar from './Components/Toolbar//Toolbar.jsx';


export const TextInputContext = React.createContext()


export default function TextEditor({ToolbarComponents, TailwindClassNames}) {
  const [text, setText] = React.useContext(TextInputContext);

  const handleTextChange = (newText) => {
    setText(newText);
  };



  const formatLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s<]+)/g; 
    return text.replace(urlRegex, '<a href="$1">$1</a>');
  };

  return (
	  <div id="text-editor"
	  	className={`${TailwindClassNames} flex flex-col flex-grow overflow-auto`}>
      		<Toolbar ControllerComponents={ToolbarComponents}/>
	  	
	  	<div id="text-input-container"
	  		className="flex-grow overflow-auto">
			<TextInput/>
	  	</div>
	  </div>
  );
}
