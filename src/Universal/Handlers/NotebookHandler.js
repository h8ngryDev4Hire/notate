import StorageHandler from './StorageHandler.js';

// NotebookManager Class Definition
export default class NotebookHandler {
  // Notebook Class Definition
  static Notebook = class {
    constructor(id, title, description, collection) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.collection = collection;
    }

	async assignNoteToCollection (note) {
		this.collection.push(note.id)
		debugger
		StorageHandler.updateNotebook(this)
  	}

	async removeNoteFromCollection (note) {
		this.collection.remove(note.id)
	}

  };



  static async createNotebook(title, description) {
    const notebooks = await StorageHandler.getNotebooks();
    const newNotebookId = notebooks.length + 1;
    const newNotebook = new this.Notebook(newNotebookId, title, description, []);
    await StorageHandler.saveNotebook(newNotebook);
  }

  static async deleteNotebook(notebookId) {
    await StorageHandler.deleteNotebook(notebookId);
  }

  static async getNoteByID (notebook) {
	const notes = await Promise.all(
		notebook.collection.slice(0,4).map(async (id,index)=>{
		const note = await StorageHandler.getNote(id)
		return note;
		}))
	return notes	
	}


  // Add more notebook-related operations as needed
}
