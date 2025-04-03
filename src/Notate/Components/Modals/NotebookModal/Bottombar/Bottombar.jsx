import React from 'react';
import SaveNotebookButton from './SaveNotebookButton.jsx'


export default function BottomBar() {

	return (
		<div id="notebook-modal-bottombar"
		className="flex right-0 p-2 h-[auto] w-full px-4 justify-between">
			<div id="left-side" className="w-auto justify-start">
				<SaveNotebookButton/>
			</div>
		</div>
	)
}
