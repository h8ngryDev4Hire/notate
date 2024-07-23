import React from 'react';
import TextInput from './Components/TextInput.jsx';
import Toolbar from './Components/Toolbar//Toolbar.jsx';


export const TextInputContext = React.createContext()
export const ShadowRootContext = React.createContext()


export default function TextEditor({ToolbarComponents, TailwindClassNames, ShadowRootElement}) {
  const [text, setText] = React.useContext(TextInputContext);

  const handleTextChange = (newText) => {
    setText(newText);
  };



  return (
	  <div id="text-editor"
	  	className={`${TailwindClassNames} flex flex-col flex-grow overflow-auto`}>
      		<Toolbar ControllerComponents={ToolbarComponents}/>
	  	
	  	<div id="text-input-container"
	  		className="flex-grow overflow-auto">
	  		<ShadowRootContext.Provider value={[ShadowRootElement]}>
				<TextInput/>
	  		</ShadowRootContext.Provider>
	  	</div>
	  </div>
  );
}
