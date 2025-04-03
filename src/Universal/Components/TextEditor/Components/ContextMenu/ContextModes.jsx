import React, { useContext } from 'react'
import { ContextMenuStateContext } from './ContextMenu.jsx'
import { NormalModeCmds, SelectionModeCmds } from './ContextModeCmds.js'


export function NormalMode() {
	const [ active, setActive ] = useContext(ContextMenuStateContext)	

	const consumeAction = (action) => {
		action()	
		setActive(false)
	}


	return (
		<li 
		 id="normal-mode"
		 className="flex flex-col"
		>
		{NormalModeCmds.map( (cmd, id) => {
			return (
				<button
				 key={id}
				 id={cmd.type}
				 onClick={()=> consumeAction(cmd.action)}
				 className={`
				 	w-full h-[2rem] flex items-center justify-center 
					text-center text-[.8rem]  text-white cursor-default
					hover:bg-zinc-600
				`}>
				{cmd.name}
				</button>
			)
		})}
		</li>
	)
}



export function SelectionMode() {
	const [ active, setActive ] = useContext(ContextMenuStateContext)	

	const consumeAction = (action) => {
		action()	
		setActive(false)
	}

	return (
		<li 
		 id="selection-mode"
		 className="flex flex-col"
		>
		{SelectionModeCmds.map( (cmd, id) => {
			return (
				<button
				 key={id}
				 id={cmd.type}
				 onClick={()=> consumeAction(cmd.action)}
				 className={`
				 	w-full h-[2rem] flex items-center justify-center
					text-center text-[.8rem] text-white cursor-default
					hover:bg-zinc-600
				`}>
				{cmd.name}
				</button>
			)
		})}
		</li>
	)
}
