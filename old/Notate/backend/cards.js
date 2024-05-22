import { StorageManager } from '../../utils.js';
import { NoteModalHandler } from './modals.js';

export class CardHandler {
  // Function to create a note card element
  static createNoteCard(note) {
    const noteCard = $('<div>', { class: 'note-card', 'data-note-id': note.id });
    const noteTitle = $('<h3>', { class: 'note-title', text: note.title });
    const noteContent = $('<p>', { class: 'note-content', text: note.content });

    noteCard.append(noteTitle, noteContent);

    return noteCard;
  }

  // Function to create a notebook card element
  static async createNotebookCard(notebook) {
    const notebookCard = $('<div>', { class: 'notebook-card', 'data-notebook-id': notebook.id });
    const notebookTitle = $('<h3>', { class: 'notebook-title', text: notebook.title });
    const notebookDescription = $('<p>', { class: 'notebook-description', text: notebook.description });
    const notebookNotes = $('<div>', { class: 'notebook-notes' });

    // Get the first 4 notes from the notebook's collection
    const firstFourNoteIds = notebook.collection.slice(0, 4);

    // Fetch the note objects based on the note IDs
    const notes = await StorageManager.getNotes();
    const firstFourNotes = firstFourNoteIds.map((noteId) => notes.find((note) => note.id === noteId)).filter(Boolean);

    // Create note cards for the first 4 notes
    firstFourNotes.forEach((note) => {
      const noteCard = CardHandler.createNoteCard(note);
      noteCard.addClass('notebook-note-card');
      noteCard.on('click', (event) => {
        event.stopPropagation();
        NoteModalHandler.openNoteModal(note);
      });
      notebookNotes.append(noteCard);
    });

    notebookCard.append(notebookTitle, notebookDescription);
    notebookCard.append(notebookNotes);

    return notebookCard;
  }

  // Function to populate the recent notes section
  static async populateRecentNotes() {
    const recentNotesContainer = $('.recent-notes-container');
    recentNotesContainer.empty();

    const notes = await StorageManager.getNotes();
    const notebooks = await StorageManager.getNotebooks();

    // Filter notes that are not assigned to any notebook
    const unassignedNotes = notes.filter((note) => {
      return !notebooks.some((notebook) => notebook.collection.includes(note.id));
    });

    // Create note cards for unassigned notes
    unassignedNotes.forEach((note) => {
      const noteCard = this.createNoteCard(note);
      recentNotesContainer.append(noteCard);
    });

    // Create notebook cards
    for (const notebook of notebooks) {
      const notebookCard = await this.createNotebookCard(notebook);
      recentNotesContainer.append(notebookCard);
    }
  }

  // Function to filter notes and notebooks based on search input
  static async filterNotesAndNotebooks() {
    const searchTerm = $('#searchInput').val().toLowerCase();
    const notes = await StorageManager.getNotes();
    const notebooks = await StorageManager.getNotebooks();

    const filteredNotes = notes.filter(note =>
      note.title.toLowerCase().includes(searchTerm) ||
      note.content.toLowerCase().includes(searchTerm)
    );

    const filteredNotebooks = notebooks.filter(notebook =>
      notebook.title.toLowerCase().includes(searchTerm) ||
      notebook.description.toLowerCase().includes(searchTerm)
    );

    const recentNotesContainer = $('.recent-notes-container');
    recentNotesContainer.empty();

    let matchingNotesCount = 0;

    // Create note cards for filtered notes
    filteredNotes.forEach((note) => {
      const noteCard = CardHandler.createNoteCard(note);
      recentNotesContainer.append(noteCard);
      matchingNotesCount++;
    });

    // Create notebook cards for filtered notebooks
    for (const notebook of filteredNotebooks) {
      const notebookCard = await CardHandler.createNotebookCard(notebook);
      recentNotesContainer.append(notebookCard);
      matchingNotesCount++;
    }

    $('#matchingNotesCount').text(matchingNotesCount);

    // Toggle the visibility of the search indicator based on the presence of search text
    if (searchTerm.trim() !== '') {
      $('.search-indicator').show();
    } else {
      $('.search-indicator').hide();
    }
  }
}
