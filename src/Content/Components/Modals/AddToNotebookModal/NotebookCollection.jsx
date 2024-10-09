import React from 'react'
import { ModalControllerContext } from '@content/Components/Modals/Modal.jsx'
import NotebookCard from '@universal/Components/NotebookCard.jsx'

const NOTATE_DB = "notate"
const ERROR_LOGGING_DB = "errorLogging"
const USER_CONFIGURATION_DB = "userConfiguration"


export default function NotebookCollection() {
	const { REQUEST, NOTATE_DB, QUEUE } = React.useContext(ModalControllerContext)
	const [ queue, add2Queue ] = QUEUE
	const [ response, makeRequest ] = REQUEST 
	const [ notatedb ] = NOTATE_DB

	const [ notebooks, setNotebooks ] = React.useState([])


	const handleNoteDrop = (notebook, note) => {
		try {
			const id = note.id
			const dupe = notebook.collection.some( (item) => item === id )

			if (!dupe) {
				notebook.collection.push(id)
				add2Queue(queue => ([...queue, notebook]))
			}
		} catch(error) {

		}
	}


	React.useEffect(()=>{
		const asyncProcessor = async () => {
			if (notatedb.inventory) {
				const inventory = notatedb.inventory

				setNotebooks(inventory.NOTEBOOKS)

			} 
		}

		asyncProcessor()
	},[notatedb])

	return (
		<main 
		 id="notebook-collection" 
		 className={`
		 	flex items-center  space-x-[1rem] 
			overflow-x-auto px-[1rem] flex-grow
		`}>
		{notebooks.map( (notebook, key) => {
			return (
				<
				 NotebookCard
				 key={key}
				 notebook={notebook}
				 updatesDispatcher={handleNoteDrop}
				/>	
			)
		})}
		</main>
	)
}
