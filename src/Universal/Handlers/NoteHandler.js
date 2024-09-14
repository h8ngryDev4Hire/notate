

// NoteHandler Class Definition
export default class NoteHandler {
	static database = null

  // Note Class Definition

/*
	DO NOT USE THIS CONSTRUCTOR CLASS EXPLICITLY. ONLY CALL SIBLING 
	METHODS THAT WILL CREATE THE NOTE USING THIS CONSTRUCTOR CLASS

	a Note object that is used across the application and fills out the 
	NoteCard component.

	Note.title:	Title of the note that is visually referenced by NoteCard component.
	Note.content:	Content of the note that is visually referenced by NoteCard component.
	Note.origin:	The URL of which the note was created at.
	Note.created:	Timestamp of when note was created using Date() class 
	Note.modified:	Timestamp of when note was modified using Date() class
*/
  static Note = class {
    constructor(
	    title="", 
	    content="", 
	    origin=window.location.hostname + window.location.pathname, 
	    modified = new Date()
    ) {
      this.title = title;
      this.content = content;
      this.origin = origin;

      this.created = new Date().toString();
      this.modified = modified.toString();
    }
  };
  // Add more note-related operations as needed
}



