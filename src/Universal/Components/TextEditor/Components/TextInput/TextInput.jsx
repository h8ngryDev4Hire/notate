import React from 'react';
import * as Format from './InputFormatters.js'
import { TextInputContext, ShadowRootContext } from '../../TextEditor.jsx';


export const TEXT_EDITOR_ID = 'input-text-display'




export default function TextInput() {

	const [text, setText] = React.useContext(TextInputContext);
	const [shadowRootElement] = React.useContext(ShadowRootContext);

	const [ root, setRoot ] = React.useState(null)


	const textDisplayRef = React.useRef(null);


	const handleChange = (event) => {
		const target = event.target


		Format.textContent(target)

		const content = target.innerHTML;
		const findLinks = Format.links(content)
		console.log('findLinks results: ', findLinks)
		setText(findLinks);
	};




	const handleDragStart = (event) => {
		if (event.target.tagName === 'IMG') {
        	  	event.dataTransfer.setData('text/plain', event.target.id);
        	}
	}

	
	const handleDragOver = (event) => {
        	event.preventDefault();
        	event.stopPropagation();
    	};
	
	const handleDrop = (event) => {
    		event.preventDefault();
    		event.stopPropagation();

    		const htmlData = event.dataTransfer.getData('text/html');
    		const plainTextData = event.dataTransfer.getData('text/plain');
		const target = event.target


		debugger
    		if (htmlData && plainTextData.startsWith('img-')) {
			console.log('existing img found')

        		// Handle existing image reposition
        		const parser = new DOMParser();
        		const doc = parser.parseFromString(htmlData, 'text/html');
        		const img = doc.querySelector('img');
        
        		if (img) {
            			const existingImg = root.getElementById(img.id);
            			if (existingImg) {
                			Format.imageAtCursor(existingImg, root, textDisplayRef, setText, target);
            			}
        		}
    		} else {
        		const files = event.dataTransfer.files;
        		if (files && files.length > 0) {
            			const file = files[0];
            			if (typeof file.type === 'string') {
                			const reader = new FileReader();
                			reader.onload = (e) => {
                    				const img = new Image();
                    				img.onload = () => {
                        				const naturalWidth = img.naturalWidth;
                        				const naturalHeight = img.naturalHeight;
                        				const imgElement = document.createElement('img');

                        				imgElement.src = e.target.result;
                        				imgElement.id = Format.uniqueId('img');
                        				imgElement.style.width = `${naturalWidth}px`;
                        				imgElement.style.height = `${naturalHeight}px`;
                        				imgElement.setAttribute('draggable', 'true');
                        				imgElement.setAttribute('data-natural-width', naturalWidth);
                        				imgElement.setAttribute('data-natural-height', naturalHeight);

                        				Format.imageAtCursor(
								imgElement, root, textDisplayRef, setText, target
							);
                    				};

                    				img.src = e.target.result;
                			}

                			reader.readAsDataURL(file);
            			}
        		}
    		}
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
    	//	} else if (event.key === 'Backspace') {
	//		event.preventDefault()
	//		document.execCommand('delete')
		} else {
			event.stopPropagation()
    		}

    		setText(event.target.innerHTML);
	};


	const initializeTextInput = React.useCallback( ()=> {
		if (!root) return	

		const INPUT = root.getElementById(TEXT_EDITOR_ID)

		if (INPUT instanceof Node) {
			INPUT.innerHTML = text || ''
			Format.textContent(INPUT)
		}
	}, [root])


	React.useEffect(()=>{
		setRoot( shadowRootElement || document )
	},[shadowRootElement])


	React.useEffect(()=>{
		initializeTextInput()
	},[ initializeTextInput, root ])


	return (
		<>
			<div
        		 id={TEXT_EDITOR_ID}
        		 ref={textDisplayRef}
        		 className={`
			 	 ${ root === shadowRootElement ? "text-black" : "text-white" }
				 w-full h-full max-h-[100vh] p-2  
				 rounded bg-inherit outline-none text-base
			 `}
        		 contentEditable
			 suppressContentEditableWarning
        		 onInput={handleChange}
			 onKeyDown={handleKeyDown}
			 onDragOver={handleDragOver}
			 onDragStart={handleDragStart}
			 onDrop={handleDrop}
		  	>
      			</div>

		</>
	);
}
