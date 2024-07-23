import React from 'react';
import NotificationHandler from '@universal/Handlers/NotificationHandler.js';

export const NotificationContext = React.createContext()

export default function NotificationMsg() {
	const [ notification, setNotification ] = React.useContext(NotificationContext)

	const [selfState, setSelfState] = React.useState(false)
	const [ visible, setVisibility ] = React.useState(true)

	
	const TTL = async (duration) => {
	
	
		await new Promise(resolve => {
			setTimeout( async ()=>{
				setVisibility(false)
				await new Promise(resolve => setTimeout(resolve,300))
				resolve()
			}, duration)
		})


		if (notification?.active) {
			setNotification(new NotificationHandler)	
		} 


	} 


	React.useEffect(()=>{ 
		if (notification?.active) {
			setVisibility(true)
			TTL(notification?.duration);
		}


	},[notification?.active])



	return (

		notification?.active && (
			<div id="notification-banner"
			className={`pointer-events-none banner ${visible ? "opacity-100" : "opacity-0" } transition-opacity duration-500 ease-in-out z-50`}>
				<div id="notification"
				className={`relative flex items-center justify-center w-[31rem] h-[6rem]  rounded-xl`}>
					<div id="external"
					className={`absolute inset-0 ${notification?.styles?.blur} rounded-xl blur-xl`}></div>
					<div id="internal"
					className={`relative w-[30rem] h-20 bg-[#404040] rounded-xl flex items-center justify-center ${notification?.styles?.ring} ring-2`}>
						<h3 id="message"
						className="text-white font-bold text-[1.1rem]">{notification?.message}</h3>
					</div>
				</div>
			</div>
		)
	)
}




