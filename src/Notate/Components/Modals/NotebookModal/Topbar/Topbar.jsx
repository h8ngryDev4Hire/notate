import React from 'react';


export default function TopBar(){
	return (
		<header id="notebook-modal-topbar"
		className="w-full flex justify-between px-4">
			<aside id="left-section"
			className="justify-start">
				<h3 id="title" 
				className="text-2xl font-semibold ">
					Your Note Collection...
				</h3>
			</aside>
			<aside id="right-section"
			className="justify-end">
			</aside>

		</header>
	)
}
