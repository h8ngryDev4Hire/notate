import React from 'react'

import { 
	getNoteURLComparison, 
	getNoteSuggestion, 
	countWordOccurrences, 
	extractTermListFromURL, 
	extractTextContentFromHTML,
	getNotesGroupedByNotebook
} from './algorithms/RelatedNotesAlgoritm.js'

import RelatedNote from './RelatedNote.jsx'
import { RelatedNotesContext } from './RelatedNotesViewer.jsx'


export default function RelatedNotesProcessor({database, view }) {
	const { NAV_POS_STATE, HEADER_STATE, END_REACHED } = React.useContext(RelatedNotesContext)
	const [ position, setPosition ] = NAV_POS_STATE
	const [ headerState, setHeaderState ] = HEADER_STATE 
	const [ endReached, setEndReached ] = END_REACHED

	const [ processedNotes, setProcessedNotes ] = React.useState([])
	const [ scroll, setScroll ] = React.useState(`-translate-x-[${position}%]`)

	const gapRef = React.useRef(null)
	

	const termList = React.useMemo(()=> extractTermListFromURL(), [window.location.href])
	//console.log('termList: ', termList)
	
	const relatedContentFromHtml = React.useMemo( () => extractTextContentFromHTML(termList), [window.location.href])
	//console.log('relatedContentFromHtml: ', relatedContentFromHtml)

	const relatedNotesByURL = React.useMemo(()=> getNoteURLComparison(database), [database, window.location.href])
	//console.log('relatedNotesByURL: ', relatedNotesByURL)

	const suggestedNoteList = React.useMemo(()=> getNoteSuggestion(database, relatedContentFromHtml), [database, termList])
	//console.log('suggestedNoteList: ', suggestedNoteList)

	const notesRelatedByNotebook = React.useMemo(()=> getNotesGroupedByNotebook(database),[database])
	//console.log('notesRelatedByNotebook: ', notesRelatedByNotebook)
	

	React.useEffect( ()=> {
		setScroll(`-translate-x-[${position}%]`)
	},[position])


	React.useEffect(()=>{
		const gap = gapRef.current

		if (gap) {
			const intersectionObserver = new IntersectionObserver( ([entry]) => {
				setEndReached(entry.isIntersecting)
			},{
				root: null,
				rootMargin: '0px',
				threshold: 1.0 
			})

			intersectionObserver.observe(gap)

			return () => intersectionObserver.disconnect()
		}
	},[gapRef.current])


	React.useEffect(()=>{
		if (database) {
			let payload = [];
		
			switch (view.type) {
				case 'related-by-url':
					payload = [
						...relatedNotesByURL.partialMatchList,
						...relatedNotesByURL.domainMatchList,
						...relatedNotesByURL.fullMatchList
					]
					break

				case 'related-by-notebook':
					payload = [
						...notesRelatedByNotebook
					]
					break

				case 'related-by-suggestion':
          				payload = [
            					...suggestedNoteList.noteList.highConfidence,
            					...suggestedNoteList.noteList.mediumConfidence,
            					...suggestedNoteList.noteList.lowConfidence
          				];
					break
			}


			setProcessedNotes(payload)
		}
	},[database, view])


	return (
		<header 
		 id="related-notes-viewer"
		 className={`
			 trans-ease flex flex-grow h-full w-full 
			 ${ headerState ? "-translate-y-[0%] pointer-events-auto" 
			 : "-translate-y-[100%] pointer-events-none" }
			 ${scroll}
		`}>
			{processedNotes instanceof Array && processedNotes.slice(0, 25).map((note, id) => {
				const tagId = note?.id || id

				return (
					<
					 RelatedNote 
					 note={note}
					 tagId={tagId}
					 key={id}
					/>
				)
			})}	
			<div 
			 id="gap"
			 ref={gapRef}
			 className={`
				flex-grow w-[1rem]
			`}/>
		</header>		
	)
}
