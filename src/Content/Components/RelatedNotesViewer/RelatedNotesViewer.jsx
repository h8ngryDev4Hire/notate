import React from 'react';
import { 
	getNoteURLComparison, 
	getNoteSuggestion, 
	countWordOccurrences, 
	extractTermListFromURL, 
	extractTextContentFromHTML,
	getNotesGroupedByNotebook
} from './algorithms/RelatedNotesAlgoritm.js'

import DropdownArrow from '@assets/Designs/Arrows/dropdown-arrow.svg'
import RelatedNote from './RelatedNote.jsx'
import { WebContentContext } from '@content/content.jsx'


// TODO: use this for dataset cycling logic
//const nextIndex = (currentIndex + 1) % colors.length
//const currentIndex = colors.indexOf(colorIndex)

const views = [
	{
		type: 'related-by-url',
		name: 'Related By URL'
	},{
		type: 'related-by-suggestion',
		name: 'Notate\'s Suggestion'
	},{
		type: 'related-by-notebook',
		name: 'Related By Notebook'
	}
]


export default function RelatedNotesHeader() {
	const { NOTATE_DB_CONTEXT } = React.useContext(WebContentContext)
	const [ database ] = NOTATE_DB_CONTEXT

	const [ relatedNotes, setRelatedNotes ] = React.useState([])
	const [ hoverState, setHoverState ] = React.useState(false)
	const [ headerState, setHeaderState ] = React.useState(false)
	const [ navState, setNavState ] = React.useState(false)
	const [ view, setView ] = React.useState(views[0])


	const termList = React.useMemo(()=> extractTermListFromURL(), [window.location.href])
	
	const fetchedRelatedNotes = React.useMemo(()=> getNoteURLComparison(database), [database, window.location.href])

	const suggestedNoteList = React.useMemo(()=> getNoteSuggestion(database, termList), [database, termList])

	const notesRelatedByNotebook = React.useMemo(()=> getNotesGroupedByNotebook(database),[database])


	const handleHoverEvent = (e) => {
		if (e.type === "mouseenter") {
			setHoverState(true)	
		}
		else if (e.type === "mouseleave") {
			setHoverState(false)
		}	
	}

	const handleRelatedNotesUnfocus = (e) => {
		const target = e.target.id
		if (target !== 'content-script-entry-point') {
			setHeaderState(false)
			document.removeEventListener('click', handleRelatedNotesUnfocus)
		} 
	}

	
	const handleViewCycle = (directive) => {
		const current = views.indexOf(view)

		
		if (directive === 'forward') {
			const next = ( current + 1 ) % views.length
			setView(views[next])
		} else {
			const next = ( (current - 1) + views.length ) % views.length
			setView(views[next])
		}	
	}


	React.useEffect(()=>{
		if (database) {
			let payload = [];
		
			/*
			 * suggestedNoteList Brainstorm:
			 * 	Should we render when no note found on webpage?
			 * 	Should we render after a new note is created on that page? 
			 *
			*/



			switch (view.type) {
				case 'related-by-url':
					payload = [
						...fetchedRelatedNotes.domainMatchList,
						...fetchedRelatedNotes.fullMatchList
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


			setRelatedNotes(payload)
		}
	},[database, view])


	React.useEffect(()=>{
		if (headerState) {
			document.addEventListener('click', handleRelatedNotesUnfocus)	
		}

	},[headerState])


	React.useEffect(()=>{
		setNavState(headerState)
	},[headerState])


	return (
		<div 
		 id="related-notes-hover-region"
		 className="fixed flex top-0 w-[3rem] h-[2rem]"
		 onMouseEnter={handleHoverEvent}
		 onMouseLeave={handleHoverEvent}
		>
			{headerState ? (
				<span
				 id="related-notes-navigation"
				 className={`
					trans-ease flex min-w-[15rem] h-[1.5rem] rounded-b-2xl bg-yellow-300
					font-extrabold
					${ navState ? "-translate-y-[0%]" : "-translate-y-[100%]" }
				`}>
					<button 
					 id="cycle-backwards-btn" 
					 onClick={()=>{handleViewCycle('backward')}}
					 className={`
						w-[15%]
					`}>{`<`}</button>

					<span 
					 id="divider" 
					 className={`
						flex-grow h-full bg-yellow-500 
						alice-regular text-[.8rem] text-center font-bold
					`}>
						{`${view.name} View`}
					</span>

					<button 
					 id="cycle-forwards-btn" 
					 onClick={()=>{handleViewCycle('forward')}}
					 className={`
						w-[15%]
					`}>{`>`}</button>
				</span>
			) : (
				<button 
				 id="reveal-related-notes-btn"
				 onClick={()=>{setHeaderState(true)}}
				 className={`
					 trans-ease flex w-[3rem] h-[1.5rem] rounded-b-2xl
					 ${ headerState ? "-translate-y-[100%] pointer-events-none" : "bg-yellow-300" }  
					 ${ hoverState ? "-translate-y-[0%]" : "-translate-y-[100%]" }
				`}>
					<DropdownArrow className="h-[inherit] w-[inherit] fill-yellow-600"/>
				</button>
			)}


			<header 
			 id="related-notes-viewer"
			 className={`
				 trans-ease flex flex-grow h-full  
				 ${ headerState ? "-translate-y-[0%] pointer-events-auto" 
				 : "-translate-y-[100%] pointer-events-none" }
			`}>
				{
					relatedNotes.map((note, id) => {
						const tagId = note?.id || id

						return (
							<
							 RelatedNote 
							 note={note}
							 tagId={tagId}
							 key={id}
							/>
						)
					})
				}	
			</header>	
		</div>
	)
}
