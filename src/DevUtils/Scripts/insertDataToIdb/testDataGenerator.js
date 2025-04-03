import NoteHandler from '@universal/Handlers/NoteHandler.js';
import NotebookHandler from '@universal/Handlers/NotebookHandler.js';

class TestDataGenerator {
	constructor() {        
		this.domains = [
            		'example.com/article/12345',
            		'test.org/blog/technology',
            		'docs.website.com/tutorials',
            		'research.edu/papers',
            		'news.site.net/latest',
            		'blog.dev/javascript',
            		'learn.coding.io/react'
        	];
		this.titlePrefixes = [
	        	'Brainstorm:', 'Quick thoughts on', 'Meeting notes:', 
	        	'Ideas for', 'Inspiration:', 'Project plan:', 
	        	'Reading notes:', 'Research:', 'Follow-up on'
	    	];
	
	 	this.subjects = [
	        	'Digital Marketing Strategy',
	        	'Product Launch Timeline',
	        	'Team Collaboration Tools',
	        	'Creative Writing Projects',
	 		'Personal Development Goals',
	   		'Travel Planning Ideas',
	   		'Book Recommendations',
	   		'Recipe Collection',
	   		'Business Opportunities',
	   		'Learning Resources'
	    	];
	
		this.notebookTitles = [
	        	'My Creative Workshop',
	        	'Professional Development',
	        	'Personal Projects',
	        	'Daily Inspirations',
	        	'Learning Journey'
	    	];
	
	    	this.notebookDescriptions = [
	        	'Where ideas come to life - sketches, drafts, and creative experiments',
	        	'Career growth, skills development, and professional achievements tracker',
	        	'Organizing personal goals, projects, and future plans',
	        	'Daily discoveries, quotes, and moments of inspiration',
	        	'Tracking my learning progress across various interests and skills'
	    	];
	}

    generateRandomDate(start = new Date(2023, 0, 1), end = new Date()) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toString();
    }

    generateContent(length = 3) {
        const paragraphs = [];
        for (let i = 0; i < length; i++) {
            paragraphs.push(`This is a test paragraph ${i + 1} with sample content for testing purposes. ` +
                `It contains information about ${this.subjects[Math.floor(Math.random() * this.subjects.length)]} ` +
                `and ${this.subjects[Math.floor(Math.random() * this.subjects.length)]}.`);
        }
        return paragraphs.join('\n\n');
    }

    generateNotes(count = 45) {
        const notes = [];
        for (let i = 0; i < count; i++) {
            const note = new NoteHandler.Note(
                `${this.titlePrefixes[Math.floor(Math.random() * this.titlePrefixes.length)]} ${
                    this.subjects[Math.floor(Math.random() * this.subjects.length)]}`,
                this.generateContent(),
                this.domains[Math.floor(Math.random() * this.domains.length)]
            );
            
            // Add specific ID for testing
            note.id = i + 1;
            note.created = this.generateRandomDate();
            note.modified = this.generateRandomDate(new Date(note.created));
            
            // Add random color
            const colors = ['red', 'yellow', 'blue', 'green', 'orange', 'pink', 'purple'];
	    const random = Math.floor(Math.random() * colors.length)
            note.color = {
                name: colors[random],
                styles: {
                    top: `bg-${colors[random]}-400`,
                    card: `bg-${colors[random]}-200`
                }
            };

            notes.push(note);
        }
        return notes;
    }

    generateNotebooks(count = 5, notes) {
        const notebooks = [];
        const sharedNotes = notes.slice(0, 20); // First 20 notes will be shared
        let sharedNoteIndex = 0;

        for (let i = 0; i < count; i++) {
            const notebook = new NotebookHandler.Notebook(
                this.notebookTitles[i],
                this.notebookDescriptions[i]
            );

            // Add specific ID for testing
            notebook.id = i + 1;
            notebook.created = this.generateRandomDate();
            notebook.modified = this.generateRandomDate(new Date(notebook.created));

            // Distribute shared notes unevenly
            const notesToAdd = Math.floor(Math.random() * 8) + 2; // 2-9 notes per notebook
            notebook.collection = [];

            for (let j = 0; j < notesToAdd && sharedNoteIndex < sharedNotes.length; j++) {
                notebook.collection.push(sharedNotes[sharedNoteIndex].id);
                sharedNoteIndex = (sharedNoteIndex + 1) % sharedNotes.length;
            }

            notebooks.push(notebook);
        }
        return notebooks;
    }

    async injectTestData(dbAdapter) {
        try {
            const notes = this.generateNotes();
            const notebooks = this.generateNotebooks(5, notes);

            // Insert notes
            for (const note of notes) {
                await dbAdapter.insertData(note, 'NOTES');
            }

            // Insert notebooks
            for (const notebook of notebooks) {
                await dbAdapter.insertData(notebook, 'NOTEBOOKS');
            }

            console.log('Test data injection completed successfully');
            return { notes, notebooks };
        } catch (error) {
            console.error('Error injecting test data:', error);
            throw error;
        }
    }
}

export default TestDataGenerator;
