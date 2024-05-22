import React from 'react';
import { ScrollStateContext } from '../../../index.jsx';


export const ConfirmationMsgContext = React.createContext()


export default function ConfirmationMsg() {
	const [ scrollState, setScrollState ] = React.useContext(ScrollStateContext)
	const [ confMsgState, setConfMsgState ] = React.useContext(ConfirmationMsgContext)

	const performAction = () => {
		confMsgState?.action?.function()
		setConfMsgState?.action?.handleScroll ? setScrollState(true) : setScrollState(false)
		setConfMsgState(false)
	}

	const performCancel = () => {
		confMsgState?.action?.handleScroll ? setScrollState(true) : setScrollState(false)
		setConfMsgState(false)
	}


	React.useEffect(()=>{
		setScrollState(false)
	},[])

	return (
		<div id="confirmation-modal-wrapper"
			className="fixed z-10 left-0 top-0 w-full h-screen  bg-black bg-opacity-50 flex items-center justify-center">

			<div id="confirmation-modal"
				className="flex flex-col h-[10rem] w-[35rem] bg-[#2f2f2f] rounded-lg inset-0 p-3">

				<div id="msg-content"
					className="w-full p-1 space-y-3 flex-grow">
					<h2 id="title"
						className="text-white font-medium text-xl">{confMsgState?.title}</h2>
					<h3 id="message"
						className="text-white font-normal text-sm text-center p-1">{confMsgState?.message}</h3>
				</div>

				<div id="btn-ctrl-center"
					className="flex space-x-3 w-full justify-end p-1 h-auto">
					<button id="cancel-btn"
						className="h-10 w-20 bg-gray-400 rounded text-white"
						onClick={performCancel}>Cancel</button>

					<button id="action-btn"
						className="btn-sm-text bg-yellow-400 text-white"
						onClick={performAction}>{confMsgState?.action?.title}</button>
				</div>
			</div>
		</div>
	)
}
