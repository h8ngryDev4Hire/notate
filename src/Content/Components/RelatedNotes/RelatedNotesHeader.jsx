import React from 'react';
import RelatedNote from './RelatedNote.jsx'
import { WebContentContext } from '@content/content.jsx'

export default function RelatedNotesHeader() {
	const { DATABASE_CONTEXT } = React.useContext(WebContentContext)
	const [ database ] = DATABASE_CONTEXT

	const [ relatedNotes, setRelatedNotes ] = React.useState([])


	const getNoteURLComparison = () => {
		const relatedNotes = {
			fullMatchList: [],
			domainMatchList: [],
			partialMatchList: []
		}

		if (database?.inventory?.NOTES) {
			const inventory = database.inventory.NOTES

			const URL = {
				full: window.location.href,
				domain: window.location.host || window.location.hostname,
				path: window.location.pathname === "/" ? false : window.location.pathname
			}



		
			inventory.forEach((item) => {
				if (item.origin.includes(URL.full)) relatedNotes.fullMatchList.push(item)
				else if (item.origin.includes(URL.domain)) relatedNotes.domainMatchList.push(item)
				else if (URL.path && item.origin.includes(URL.path)) relatedNotes.partialMatchList.push(item)
			})

			relatedNotes.URL = URL

		}

		return relatedNotes

	}



	const getNoteSuggestion = (termList) => {
    		const suggestedNotes = {
        		highConfidence: new Set(),
        		mediumConfidence: new Set(),
        		lowConfidence: new Set(),
			noConfidence: new Set()
    		};

		function escapeRegExp(string) {
    			return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		}

    		if (database?.inventory?.NOTES) {
			// Variable assignment to the target db child props to cut down on boilerplate
        		const inventory = database.inventory.NOTES;

			// Build a regex literal string obj from the termList
        		const termRegex = new RegExp('\\b(' + termList.map(term => escapeRegExp(term)).join('|') + ')\\b', 'gi');

        		// Array to store match counts for all notes
        		const matchCounts = [];

        		// First pass: count matches for each note
        		inventory.forEach(note => {
            			const noteTextCorpus = note.title.toLowerCase() + ' ' + note.content.toLowerCase();
            			const matches = (noteTextCorpus.match(termRegex) || []).length;
            			matchCounts.push({ note, matches });
        		});

        		// Calculate statistics
        		const totalMatches = matchCounts.reduce((sum, { matches }) => sum + matches, 0);
        		const averageMatches = totalMatches / matchCounts.length;
        		const standardDeviation = Math.sqrt(
            			matchCounts.reduce((sum, { matches }) => sum + Math.pow(matches - averageMatches, 2), 0) / matchCounts.length
        		);
	
        		// Define thresholds
        		let highConfidenceThreshold = averageMatches + standardDeviation;
        		const lowConfidenceThreshold = highConfidenceThreshold / 2;

			// Check if highConfidenceThreshold is lower than lowConfidenceThreshold
			if (highConfidenceThreshold <= lowConfidenceThreshold) {
				const zeroCheck = highConfidenceThreshold === 0 ? 2 : 1

				highConfidenceThreshold = (highConfidenceThreshold + lowConfidenceThreshold) * zeroCheck
			}

        		// Second pass: assign confidence levels
        		matchCounts.forEach(({ note, matches }) => {
				note.hits = matches

            			if (matches >= highConfidenceThreshold) {
                			suggestedNotes.highConfidence.add(note);
            			} else if (matches >= lowConfidenceThreshold) {
                			suggestedNotes.mediumConfidence.add(note);
            			} else if (matches > 0) {
                			suggestedNotes.lowConfidence.add(note);
            			} else {
					suggestedNotes.noConfidence.add(note)	
				}
        		});



			return {
				noteList: {
	        			highConfidence: Array.from(suggestedNotes.highConfidence),
        				mediumConfidence: Array.from(suggestedNotes.mediumConfidence),
        				lowConfidence: Array.from(suggestedNotes.lowConfidence),
					noConfidence: Array.from(suggestedNotes.noConfidence)
				}, 
				levels: {
					 high: highConfidenceThreshold,
					 low: lowConfidenceThreshold
				},
				termList: termList,
				termRegex: termRegex
    			};
    		}


	}

	const countWordOccurrences = (corpus, word) => {
		const regex = new RegExp(`\\b${word}\\b`, 'gi')
		const matches = corpus.match(regex)
		return matches ? matches.length : 0 
	}


	const extractTermListFromURL = () => {
		const URL = window.location.pathname
	

		const regexList = URL.match(/[a-zA-Z]+/g) || [];
		const termList = regexList.filter(term => term.length > 0)

		return termList
	}

	const extractTextContentFromHTML = () => {
    		const tagNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'];

		return tagNames.flatMap(tag => 
        		Array.from(document.getElementsByTagName(tag))
        			.map(element => element.innerText)
            			.filter(text => text && text.trim() !== '')
    		);

	}


	React.useEffect(()=>{
		const fetchedRelatedNotes = getNoteURLComparison()
		const termList = extractTermListFromURL()
	
		const suggestedNoteList = getNoteSuggestion(termList)
		console.log(suggestedNoteList)
		/*
		 * suggestedNoteList Brainstorm:
		 * 	Should we render when no note found on webpage?
		 * 	Should we render after a new note is created on that page? 
		 *
		*/


		setRelatedNotes(fetchedRelatedNotes.fullMatchList)
	},[database])


	return (
		<div id="related-notes-hover-region"
		className="fixed top-0 w-screen h-[2rem] group">
			<header id="related-notes-header"
			className="trans-ease flex  w-full h-full -translate-y-[100%] group-hover:-translate-y-[0%]">
				{
					relatedNotes.map((note, id) => {
						const tagId = note?.id || id

						return (
							<RelatedNote 
							note={note}
							tagId={tagId}
							key={id}/>
						)
					})
				}	
			</header>	
		</div>
	)
}
