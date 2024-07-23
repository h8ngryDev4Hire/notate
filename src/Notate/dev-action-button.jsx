import React from 'react';

export default function DevActionButton({action}) {
	return (
		<div id="dev-action-btn-container" 
			className="fixed bottom-0 left-0 p-10">
			
			<button id="dev-action-btn" 
			className="size-20 rounded-full bg-blue-500"
			onClick={action}>CLICK ME</button>

		</div>
	)
}
