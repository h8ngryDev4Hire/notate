import React from 'react';
import { NoteColors } from './NoteColorProvider.js'
import { NotateContext } from '@notate/Notate.jsx'
import NoteModal, { NoteModalContext } from '../NoteModal.jsx';



export default function NoteColorPicker() {
	const { NOTE_CONTEXT, REQUEST_CONTEXT } = React.useContext(NotateContext)
	
	const [ note, setNote ] = NOTE_CONTEXT

	const { COLOR_CONTEXT } = React.useContext(NoteModalContext)

	const [ colorIndex, setColorIndex ] = COLOR_CONTEXT 
	const [ selectedColor, setSelectedColor ] = React.useState(note?.color?.styles || NoteColors[colorIndex])


	const colors = Object.keys(NoteColors)


	const handleColorPickerClick = () => {
		const currentIndex = colors.indexOf(colorIndex)
		const nextIndex = (currentIndex + 1) % colors.length
		const result = colors[nextIndex]

		setColorIndex(result)
		setSelectedColor(NoteColors[result])
	}


	React.useEffect(()=>{
		note.color = {
			name: colorIndex,
			styles: selectedColor
		}
	},[selectedColor])





	return (
		<span id="note-color-picker"
		className="trans-ease flex size-8 bg-[#444] rounded-md items-center justify-center cursor-pointer hover:bg-[#555]"
		onClick={handleColorPickerClick}>
			<span id="color"
			className={ `block size-[1rem] ${selectedColor?.card || "bg-gray-200" } ` }></span>
		</span>
	)
}

