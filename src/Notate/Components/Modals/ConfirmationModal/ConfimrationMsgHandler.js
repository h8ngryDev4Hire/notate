export default class ConfirmationMsgHandler {
	constructor(title, message, actionTitle, actionFunction, handleScroll=true, cancelCallback=null) {
		this.active = true
		this.title = title
		this.message = message
		this.action = {
			title: actionTitle,
			function: actionFunction,
			handleScroll: handleScroll,
			cancelCallback : cancelCallback
		}
	}
} 
