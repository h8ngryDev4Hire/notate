export const getNoteURLComparison = (database) => {
	const relatedNotes = {
		fullMatchList: [],
		domainMatchList: [],
		partialMatchList: [],
		noMatchList: []
	}

	if (database?.inventory?.NOTES) {
		const inventory = database.inventory.NOTES

		const URL = {
			full: window.location.hostname + window.location.pathname,
domain: window.location.hostname,
			path: window.location.pathname === "/" ? false : window.location.pathname
		}



	
		inventory.forEach((item) => {
			if (item.origin.includes(URL.full)) relatedNotes.fullMatchList.push(item)
			else if (item.origin.includes(URL.domain)) relatedNotes.domainMatchList.push(item)
			else if (URL.path && item.origin.includes(URL.path)) relatedNotes.partialMatchList.push(item)
			else relatedNotes.noMatchList.push(item) 
		})

		relatedNotes.URL = URL

	}

	return relatedNotes
}


export const getNoteSuggestion = (database, termList) => {
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
        	let lowConfidenceThreshold = highConfidenceThreshold / 2;

		// Check if highConfidenceThreshold is lower than lowConfidenceThreshold
		if (highConfidenceThreshold <= lowConfidenceThreshold) {
			const zeroCheck = highConfidenceThreshold === 0 ? 2 : 1

			highConfidenceThreshold = (highConfidenceThreshold + lowConfidenceThreshold) * zeroCheck
		} else if (highConfidenceThreshold === 0 && lowConfidenceThreshold) {
			lowConfidenceThreshold = 1
			highConfidenceThreshold = 2
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


export const countWordOccurrences = (corpus, word) => {
	const regex = new RegExp(`\\b${word}\\b`, 'gi')
	const matches = corpus.match(regex)
	return matches ? matches.length : 0 
}


export const extractTermListFromURL = () => {
	const URL = window.location.hostname + window.location.pathname
	

	const regexList = URL.match(/[a-zA-Z]+/g) || [];
	const termList = regexList.filter(term => term.length > 0)

	return termList
}


export const extractTextContentFromHTML = () => {
  	const tagNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'];

	return tagNames.flatMap(tag => 
       		Array.from(document.getElementsByTagName(tag))
       			.map(element => element.innerText)
         		.filter(text => text && text.trim() !== '')
    	);
}


export const getNotesGroupedByNotebook = (database) => {
	const notebookGroups = {};

  	if (database?.inventory?.NOTES && database?.inventory?.NOTEBOOKS) {
    		const notes = database.inventory.NOTES;
    		const notebooks = database.inventory.NOTEBOOKS;

    		notebooks.forEach(notebook => {
    	  		notebookGroups[notebook.id] = {
    	    		notebook: notebook,
    	    		notes: []
    	  		};
    		});

    		notes.forEach(note => {
    	  		if (note.notebookId) {
    	    		if (notebookGroups[note.notebookId]) {
    	      			notebookGroups[note.notebookId].notes.push(note);
    	    		}
    	  		}
    		});
  	}

	return Object.values(notebookGroups).flatMap(group => group.notes)
}