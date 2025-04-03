import React from 'react';
import { createPortal } from 'react-dom'
import { RecentNotesContext } from './RecentNotes.jsx'
import { NotateContext } from '@notate/Notate.jsx';
import NoteCard from '@universal/Components/NoteCard.jsx';
import NotebookCard from '@universal/Components/NotebookCard.jsx';

import RightCurvedUpArrow from '@assets/Designs/Arrows/right-curved-up-arrow.svg'

export default function DisplayMode() {
	const { NOTATE_DB_CONTEXT } = React.useContext(NotateContext)
	const [ database ] = NOTATE_DB_CONTEXT 

	const { SORTED_ITEMS_CONTEXT, 
		ACTIVE_SEARCH_CONTEXT, 
		NOTE_LIST_CONTEXT, 
		NOTEBOOK_LIST_CONTEXT, 
		SEARCH_TERM_CONTEXT,
		FUNCTIONS } = React.useContext(RecentNotesContext)

	const [ noteList ] = NOTE_LIST_CONTEXT
	const [ notebookList ] = NOTEBOOK_LIST_CONTEXT
	const [ searchTerm ] = SEARCH_TERM_CONTEXT
	const [ sortedItemsNotEmpty, setSortedItemsState ] = SORTED_ITEMS_CONTEXT
	const [ activeSearch, setActiveSearch ] = ACTIVE_SEARCH_CONTEXT


	const [ sortedNotes, setSortedNotes ] = React.useState([])
	const [ sortedNotebooks, setSortedNotebooks ] = React.useState([])


	const filterItems = (notes, notebooks) => {
		const results = {
			note: [],
			notebook: []
		}

		if (notes) results.note = notes.filter(
			(note) => note.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		
		if (notebooks) results.notebook = notebooks.filter(
			(notebook) => notebook.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		
		return results
	}

	const sortItems = (notes, notebooks) => {
		const results = {
			note: [],
			notebook: []
		}

		if (notes) {
			
			const sortedNotes = notes.sort((noteA, noteB) => {
				const dateA = new Date(noteA.modified)
				const dateB = new Date(noteB.modified)
				return dateB - dateA
  			})

			results.note = sortedNotes
		}

		if (notebooks) {
  			
			const sortedNotebooks = notebooks.sort((bookA, bookB) => {
				const dateA = new Date(bookA.modified)
				const dateB = new Date(bookB.modified)
				return dateB - dateA
  			}) 

			results.notebook = sortedNotebooks
		}

		return results
	}


	const removeNoteCardsFromRender = (noteList, notebookList) => {
		if (noteList && notebookList) {
			const noteCardDupesExtractedFromCollections = []

			notebookList.forEach(notebook => notebook.collection.forEach(
				id => noteCardDupesExtractedFromCollections.push(id)) 
			)

			const dupeFreeNoteList = noteList.filter(
				note => !noteCardDupesExtractedFromCollections.includes(note.id)
			)

			return dupeFreeNoteList

		} else return [] 

	}


	// First useEffect hook ran to initialize component. Populates item list hooks
	// and sets the sortedItemsNotEmpty && activeSearch booleans.
	React.useEffect(()=>{
		const results = sortItems(noteList, notebookList)

		const dupeFreeNoteList = removeNoteCardsFromRender(results?.note, results?.notebook)


		if (dupeFreeNoteList) setSortedNotes(dupeFreeNoteList)
		if (results?.notebook) setSortedNotebooks(results.notebook)

		const sortedBoolean = (sortedNotes.length > 0) || (sortedNotebooks.length > 0)
		setSortedItemsState(sortedBoolean)

		const activeSearchBoolean = searchTerm !== ''
		setActiveSearch(activeSearchBoolean)	

	},[noteList, notebookList])



	// Second useEffect hook to run that is responsible for updating the 
	// sortedItemsNotEmpty && activeSearch booleans. All re-renders are only triggerred when
	// re-sorting the item list hooks
	React.useEffect(()=>{
  		// These booleans are used to compare what should be displayed within the #recent-notes-container
  		// section. If there are no notes/notebooks and no active search term, the EmptyRecentsContent Component
  		// displays, NoItemsFound Component if there is an active search term but no items returned, and the items 
  		// in all other cases.
		//
		const sortedBoolean = (sortedNotes.length > 0) || (sortedNotebooks.length > 0)
		setSortedItemsState(sortedBoolean)

		const activeSearchBoolean = searchTerm !== ''
		setActiveSearch(activeSearchBoolean)	
		
	}, [sortedNotes, sortedNotebooks])



	// Third useEffect hook to run that updates the item lists && display booleans
	// to filter the item lists based on the search term. Otherwise returning the 
	// originally provided item list sets. All re-renders triggered only when searchTerm 
	// updates.
	React.useEffect(()=>{
		if (searchTerm !== '') {
			const filterResults = filterItems(noteList, notebookList)
			const sortResults = sortItems(filterResults.note, filterResults.notebook)


			setSortedNotes(sortResults.note)
			setSortedNotebooks(sortResults.notebook)
		} else {
			const dupeFreeNoteList = removeNoteCardsFromRender(noteList, notebookList)

			setSortedNotes(dupeFreeNoteList)
			setSortedNotebooks(notebookList)
		}
	},[searchTerm])



	return (
		
    		<div id="recent-notes-container" 
	  	className={`${sortedItemsNotEmpty ? "grid grid-cols-4 gap-10" : "" } w-[85%] justify-items-center`}>
 			{
				sortedItemsNotEmpty ? (sortedNotes.map((note, index) => {
					return (
						<NoteCard 
						 key={index} 
						 note={note} 
	      					 onClick={() => FUNCTIONS.HANDLE_NOTE_CLICK(note)}
						/> 
					)
      				})) : ( activeSearch ? <NoItemsFound/> : <EmptyRecentsContent/> ) 
			}
      			{
				sortedNotebooks.map((notebook, index) => {
		      			return (
						<NotebookCard 	      
			      			 key={index} 
			      			 notebook={notebook} 
			      			 onNotebookClick={() => FUNCTIONS.HANDLE_NOTEBOOK_CLICK(notebook)}
						 onNoteClick={FUNCTIONS.HANDLE_NOTE_CLICK}
		      				 updatesDispatcher={FUNCTIONS.NOTEBOOK_DRAGDROP_LISTENER}
						 inventory={database?.inventory}
						/>
      			)})}
    		</div>
	)
}

const NoItemsFound = () => {
	const { THEME_CONTEXT } = React.useContext(NotateContext)
	const theme = THEME_CONTEXT

	return (
		<div id="no-items-found-container" className="flex  items-center justify-center">
			<h2 id="no-items-found-text" className={`text-[1.45rem] font-bold garamond-bold ${theme.text.h2 || ""}`}>No Notes or Notebooks Found...</h2>
		</div>
	)
}



const EmptyRecentsContent = () => {
	const { THEME_CONTEXT } = React.useContext(NotateContext)
	const theme = THEME_CONTEXT

	const [ portal, setPortal ] = React.useState(null)

	React.useEffect(()=>{
		const test = window.document.getElementById('new-item-btn-container')
		// For now we are leaving this disabled until we can fix other Components
		// to be more responsive
		//setPortal(test)

	},[])

	return (
		<>
			<div className="flex items-center justify-center">
				<div className="items-center justify-center">
					<h3 className={`text-2xl font-semibold ${theme.text.h3 || ""}`}>Nothing to see yet... </h3>
					<h1 className={`text-[4rem] ${theme.text.h3 || ""} font-bold text-center`}>:(</h1>
	
				</div>

			</div>




		
			{portal && createPortal(
				<div id="new-items-help-context"
				className="absolute flex ">
					<p className="text-gray-400 max-w-[6rem] text-bold">Click here to begin adding some notes!</p>
					<span>
						<RightCurvedUpArrow className="size-12 fill-gray-500"/>
					</span>
				</div> , portal 
			)}
		</>
	) 
}


