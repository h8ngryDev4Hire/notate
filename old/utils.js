// Constants Definitions



// Class Definitions


// StorageManager Class
export class StorageManager {

	// Constants Definitions
	static  CHROME_STORAGE_CONFIGURATION = {
	NOTES: 'NOTES',
	NOTEBOOKS: 'NOTEBOOKS',
}

	// Methods Definitions
  static async getNotebooks() {
    return new Promise((resolve) => {
      chrome.storage.sync.get(this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS, (data) => {
        resolve(data[this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS] || []);
      });
    });
  }

static async getNotebook(notebookId) {
  const notebooks = await this.getNotebooks();
  return notebooks.find((notebook) => notebook.id === notebookId);
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

  static async getNotes() {
    return new Promise((resolve) => {
      chrome.storage.sync.get(this.CHROME_STORAGE_CONFIGURATION.NOTES, (data) => {
        resolve(data[this.CHROME_STORAGE_CONFIGURATION.NOTES] || []);
      });
    });
  }



static async saveNote(note) {
  const notes = await this.getNotes();
  const existingNoteIndex = notes.findIndex((n) => n.id === note.id);

  if (existingNoteIndex !== -1) {
    // Update existing note
    notes[existingNoteIndex] = note;
  } else {
    // Create new note
    notes.push(note);
  }

  return new Promise((resolve) => {
    chrome.storage.sync.set({ [this.CHROME_STORAGE_CONFIGURATION.NOTES]: notes }, () => {
      resolve();
    });
  });
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


// NoteManager Class Definition
export class NoteManager {
  // Note Class Definition
  static Note = class {
    constructor(id, title, content, origin) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.origin = origin;
    }
  };

  static async createNote(title, content, origin) {
  const notes = await StorageManager.getNotes();
  const newNoteId = notes.length + 1;
  const newNote = new NoteManager.Note(newNoteId, title, content, origin);
  await StorageManager.saveNote(newNote);
  return newNote;
}

  static async deleteNote(noteId) {
    await StorageManager.deleteNote(noteId);
  }

  // Add more note-related operations as needed
}

// NotebookManager Class Definition
export class NotebookManager {
  // Notebook Class Definition
  static Notebook = class {
    constructor(id, title, description, collection) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.collection = collection;
    }
  };

  static async createNotebook(title, description) {
    const notebooks = await StorageManager.getNotebooks();
    const newNotebookId = notebooks.length + 1;
    const newNotebook = new NotebookManager.Notebook(newNotebookId, title, description, []);
    await StorageManager.saveNotebook(newNotebook);
  }

  static async deleteNotebook(notebookId) {
    await StorageManager.deleteNotebook(notebookId);
  }

  // Add more notebook-related operations as needed
}



// NotificationManager Class Definition
export class NotificationManager {
  static showNotification(message, type = 'info', duration = 3000) {
    const notificationContainer = $('.notification-container');
    notificationContainer.text(message);
    notificationContainer.removeClass('info warning error');
    notificationContainer.addClass(`show ${type}`);

    setTimeout(() => {
      notificationContainer.removeClass('show');
    }, duration);
  }

  static info(message) {
    this.showNotification(message, 'info');
  }

  static warning(message) {
    this.showNotification(message, 'warning');
  }

  static error(message) {
    this.showNotification(message, 'error');
  }
}


