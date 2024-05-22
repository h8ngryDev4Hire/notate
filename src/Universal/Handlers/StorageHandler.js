import NotebookHandler from './NotebookHandler.js';
import NoteHandler from './NoteHandler.js';


// StorageManager Class
export default class StorageHandler {

	// Constants Definitions
	static  CHROME_STORAGE_CONFIGURATION = {
	NOTES: 'NOTES',
	NOTEBOOKS: 'NOTEBOOKS',
}

	static NOTATE_ORIGIN_URL = "chrome-extension://oafafkiomfjgiiinldeiliabogmpfpke/index.html"

	// Methods Definitions
  static async getNotebooks() {
    return new Promise((resolve) => {
      chrome.storage.sync.get(this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS, (data) => {
	      	const accessedDataExists = data[this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS] ? data[this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS] : false
	      	const notebooks = []
	      	
	      	if (accessedDataExists) {
			accessedDataExists.forEach((notebook)=>{
				notebooks.push(Object.setPrototypeOf(notebook, NotebookHandler.Notebook.prototype))
		})

		}
	     	 
	      
        resolve(data[this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS] || []);
      });
    });
  }

static async getNotebook(notebookId) {
  const data = await this.getNotebooks();
  return data.find((notebook) => notebook.id === notebookId);
}

  static async saveNotebook(notebook) {
    const notebooks = await this.getNotebooks();
    const updatedNotebooks = [...notebooks, notebook];
    return new Promise((resolve) => {
      chrome.storage.sync.set({ [this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS]: updatedNotebooks }, () => {
        resolve();
      });
    });
  }

  static async updateNotebook(notebook) {
    const notebooks = await this.getNotebooks();
    const index = notebooks.findIndex((n) => n.id === notebook.id);
    if (index !== -1) {
      notebooks[index] = Object.setPrototypeOf(notebook, NotebookHandler.Notebook.prototype);
      return new Promise((resolve) => {
        chrome.storage.sync.set({ [this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS]: notebooks }, () => {
          resolve();
        });
      });
    }
  }


  static async getNotes() {
    return new Promise((resolve) => {
      chrome.storage.sync.get( [this.CHROME_STORAGE_CONFIGURATION.NOTES], (data) => {
		if (data?.NOTES) {
			const notes = []
			const accessNoteKeys = Object.entries(data)[0][1]

			accessNoteKeys.forEach((note)=>{
	      			Object.setPrototypeOf(note, NoteHandler.Note.prototype)
				notes.push(note)
			})
			resolve(notes)
		} 

	      resolve(data[this.CHROME_STORAGE_CONFIGURATION.NOTES] || []);
      });
    });
  }

	static async getNote (noteID) {
	    return new Promise((resolve) => {
	      chrome.storage.sync.get(this.CHROME_STORAGE_CONFIGURATION.NOTES, (data) => {
			Object.entries(data).forEach(([key,val])=>{
	            Object.entries(val).forEach(([notes, meta])=>{
	                if (meta.id == noteID) {
				const note = Object.setPrototypeOf(meta, NoteHandler.Note.prototype)
				resolve(note || [])
			} 
	            })
	        })
	      });
	    });
	  }




static async saveNote(note) {
	const notes = await this.getNotes();
	note.modified = new Date().toString()


	// If either note was created in Notate app or was never assigned an origin property
	if (note?.origin === undefined || note?.origin === null) {
		note.origin = this.NOTATE_ORIGIN_URL	
	}

	if (note?.id === undefined) {
		// New Note
		note.id = notes.length
		notes.push(note)

	} else {
		//Existing Note
		const index = notes.findIndex((n) => n.id === note.id);
		notes[index] = note
		
	}

  return new Promise((resolve) => {
    chrome.storage.sync.set({ [this.CHROME_STORAGE_CONFIGURATION.NOTES]: notes }, () => {
      resolve();
    });
  });
}

static async setNote(note) {
	let exists = false;

	const prevNotes = await this.getNotes()
	const newNotes = []

	// Checks if note already exists
	prevNotes.forEach((n)=>{
		if (n.id === note.id)  {
			newNotes.push(note)
			exists = true
		} else {
			newNotes.push(n)
		}	
	})

	if (!exists) {newNotes.push(note)}

	return new Promise((resolve) => {
		chrome.storage.sync.set({ [ this.CHROME_STORAGE_CONFIGURATION.NOTES ]: newNotes }, () => { resolve() })
	})
}



  static async deleteNotebook(notebookId) {
    const notebooks = await this.getNotebooks();
    const updatedNotebooks = notebooks.filter((notebook) => notebook.id !== notebookId);
    return new Promise((resolve) => {
      chrome.storage.sync.set({ [this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS]: updatedNotebooks }, () => {
        resolve();
      });
    });
  }

  static async deleteNote(noteId) {
    const notes = await this.getNotes();
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    return new Promise((resolve) => {
      chrome.storage.sync.set({ [this.CHROME_STORAGE_CONFIGURATION.NOTES]: updatedNotes }, () => {
        resolve();
      });
    });
  }
}
