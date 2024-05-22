import { StorageManager, NotificationManager, NoteManager, NotebookManager } from '../../utils.js';
import { CardHandler } from './cards.js';

// Tells the system what the current Note is
export let currentNoteId = { id: null };

export class NoteModalHandler {
  // Constants Declarations
  static editNoteTitle = $('#editNoteTitle');
  static saveNoteBtn = $('#saveNoteBtn');
  static noteModal = $('#noteModal');
  static editNoteContent = $('#editNoteContent');

  // Functions Declarations
  static openNoteModal(note) {
    currentNoteId.id = note.id;
    this.editNoteTitle.val(note.title);
    this.editNoteContent.val(note.content);
    this.noteModal.css('display', 'block');
  }

  static closeNoteModal() {
    this.noteModal.css('display', 'none');
    currentNoteId.id = null;
    this.editNoteTitle.val('');
    this.editNoteContent.val('');
  }

  static handleNoteCardClick = async (event) => {
    const noteId = $(event.currentTarget).data('note-id');
    const notes = await StorageManager.getNotes();
    const note = notes.find((note) => note.id === noteId);
    if (note) {
      this.openNoteModal(note);
    }
  };

  static handleModalOutsideClick = (event) => {
    if (event.target === this.noteModal[0]) {
      this.closeNoteModal();
    }
  };

  static handleCloseModalButtonClick = () => {
    this.closeNoteModal();
  };

  static handleSaveNoteButtonClick = async () => {
    const updatedNoteTitle = this.editNoteTitle.val().trim();
    const updatedNoteContent = this.editNoteContent.val().trim();

    if (updatedNoteTitle !== '' && updatedNoteContent !== '') {
      if (currentNoteId.id) {
        const notes = await StorageManager.getNotes();
        const noteIndex = notes.findIndex((note) => note.id === currentNoteId.id);

        if (noteIndex !== -1) {
          notes[noteIndex].title = updatedNoteTitle;
          notes[noteIndex].content = updatedNoteContent;
          await StorageManager.saveNote(notes[noteIndex]);
          NotificationManager.info('Note updated successfully!');
        }
      } else {
        const newNote = {
          title: updatedNoteTitle,
          content: updatedNoteContent,
          origin: window.location.href,
        };
        await NoteManager.createNote(newNote.title, newNote.content, newNote.origin);
        NotificationManager.info('New note created successfully!');
      }

      CardHandler.populateRecentNotes();
      this.closeNoteModal();
    }
  };

  static handleNewNoteButtonClick = () => {
    currentNoteId.id = null;
    this.editNoteTitle.val('');
    this.editNoteContent.val('');
    this.noteModal.css('display', 'block');
  };

	static handleAdjustEditNoteContentTextarea = (event) => {
		const textarea = event.target;
	  	textarea.style.height = 'auto';
  		textarea.style.height = textarea.scrollHeight + 'px';	
	}
}

export class NotebookModalHandler {
  // Constants Declarations
  static notebookModal = $('#notebookModal');
  static notebookTitle = $('#notebookTitle');
  static notebookDescription = $('#notebookDescription');
  static editNotebookTitle = $('#editNotebookTitle');
  static editNotebookDescription = $('#editNotebookDescription');
  static notebookNotesContainer = $('#notebookNotesContainer');

  // Function Declarations
static openNotebookModal(notebook, createNoteCard) {
  this.notebookTitle.text(notebook.title);
  this.notebookDescription.text(notebook.description);
  this.notebookModal.css('display', 'block');

  // Clear previous notebook notes
  this.notebookNotesContainer.empty();

  // Render notebook notes
  StorageManager.getNotes().then((notes) => {
    notebook.collection.forEach((noteId) => {
      const note = notes.find((note) => note.id === noteId);
      if (note) {
        const noteCard = createNoteCard(note);
        noteCard.addClass('notebook-modal-note-card');
        this.notebookNotesContainer.append(noteCard);
      }
    });
  });
}


  static closeNotebookModal() {
    this.notebookModal.css('display', 'none');
    this.editNotebookTitle.hide();
    this.editNotebookDescription.hide();
  }

  static toggleNotebookTitleEdit() {
    this.notebookTitle.toggle();
    this.editNotebookTitle.toggle();
    if (this.editNotebookTitle.is(':visible')) {
      this.editNotebookTitle.val(this.notebookTitle.text());
      this.editNotebookTitle.focus();
    } else {
      this.notebookTitle.text(this.editNotebookTitle.val());
    }
  }

  static toggleNotebookDescriptionEdit() {
    this.notebookDescription.toggle();
    this.editNotebookDescription.toggle();
    if (this.editNotebookDescription.is(':visible')) {
      this.editNotebookDescription.val(this.notebookDescription.text());
      this.editNotebookDescription.focus();
    } else {
      this.notebookDescription.text(this.editNotebookDescription.val());
    }
  }

  static handleNotebookCardClick = async (event) => {
    const notebookId = $(event.currentTarget).data('notebook-id');
    const notebook = await StorageManager.getNotebook(notebookId);
    if (notebook) {
      this.openNotebookModal(notebook, CardHandler.createNoteCard);
    } else {
      console.log('Notebook not found');
    }
  };

  static handleCloseNotebookModalClick = () => {
    this.closeNotebookModal();
  };

  static handleNotebookTitleClick = () => {
    this.toggleNotebookTitleEdit();
  };

  static handleNotebookDescriptionClick = () => {
    this.toggleNotebookDescriptionEdit();
  };

  static handleNotebookNoteCardClick = async (event) => {
    const noteId = $(event.currentTarget).data('note-id');
    const notes = await StorageManager.getNotes();
    const note = notes.find((note) => note.id === noteId);
    if (note) {
      this.closeNotebookModal();
      NoteModalHandler.openNoteModal(note);
    }
  };
}
