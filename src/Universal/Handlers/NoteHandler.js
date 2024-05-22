
import StorageHandler from './StorageHandler.js';

// NoteHandler Class Definition
export default class NoteHandler {
  // Note Class Definition

/*
	DO NOT USE THIS CONSTRUCTOR CLASS EXPLICITLY. ONLY CALL SIBLING 
	METHODS THAT WILL CREATE THE NOTE USING THIS CONSTRUCTOR CLASS

	a Note object that is used across the application and fills out the 
	NoteCard component.

	Note.id:	Contains the id of the note that is used by StorageHandler and
			other components to differentiate each note from each other.
	Note.title:	Title of the note that is visually referenced by NoteCard component.
	Note.content:	Content of the note that is visually referenced by NoteCard component.
	Note.origin:	The URL of which the note was created at.
	Note.created:	Timestamp of when note was created using Date() class 
	Note.modified:	Timestamp of when note was modified using Date() class
*/
  static Note = class {
    constructor(id, title, content, origin, modified = new Date()) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.origin = origin;
      this.created = new Date().toString();
      this.modified = modified.toString();
    }
  };

/*
	Method that creates new Note by 1st assigning it
*/
  static async createNote(title, content, origin) {
  debugger
  const notes = await StorageHandler.getNotes();
  const newNoteId = notes.length + 1;
  const newNote = new this.Note(newNoteId, title, content, origin);
  await StorageHandler.setNote(newNote);
  debugger
  return newNote;
}

  static async deleteNote(noteId) {
    await StorageHandler.deleteNote(noteId);
  }

  static async updateNote(noteId) {

  }

  // Add more note-related operations as needed
}

