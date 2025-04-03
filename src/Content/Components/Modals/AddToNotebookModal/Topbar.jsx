import React from 'react'
import { ModalControllerContext } from '../Modal.jsx'


export default function Topbar() {
	const { EXIT_MODAL: exitModal } = React.useContext(ModalControllerContext)

	return (
		<header
		 id="add-to-notebook-topbar"
		 className={`
			w-full flex flex-col 
		`}>
			<section id="top-section" className={`flex justify-between`}>
				<h2 
				 id="title" 
				 className={`
				 	text-white playfair-regular text-xl
					font-bold
				`}>
				{`Add To Your Notebook Collection`}
				</h2>

				<button 
				 id="exit-btn" 
				 className={`
					text-zinc-700 hover:text-red-400 text-4xl text-center
					font-extrabold mb-2 trans-ease-all
				 `}
				 onClick={exitModal}
				>
				&times;
				</button>
			</section>
			<section>
				<label id="help-message" className={`
					text-center text-zinc-100 text-[0.75rem] italic
				`}>{`
					Drag your notes from above into the notebook of your choosing...
				`}</label>
			</section>
		</header>
	)
}
