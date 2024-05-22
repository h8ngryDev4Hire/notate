import { NoteManager, NotebookManager, StorageManager, NotificationManager } from '../utils.js';
import { NoteModalHandler, NotebookModalHandler, currentNoteId  } from './backend/modals.js';
import { SearchHandler } from './backend/search.js';
import { CardHandler } from './backend/cards.js';


$(document).ready(() => {

	  // Populate search engine selector and recent notes on page load
	  SearchHandler.selectSearchEngine(SearchHandler.currentEngineIndex);
	  CardHandler.populateRecentNotes();
	
	
	
	  // Listen for input event on the search bar
	$('#searchInput').on('input', CardHandler.filterNotesAndNotebooks);
	
	
	  // Listen for "Enter" key press on the search bar
	  $('#searchInput').on('keydown', SearchHandler.handleSearchInputKeydown);
	
	
	  // Listen for click event on the search engine selector button
	  $('.search-engine-selector').on('click', '.search-engine-btn', SearchHandler.handleSearchEngineSelectorClick);
	
	
	// Event listener for the "New Note" button click
	$('#newNoteBtn').on('click', NoteModalHandler.handleNewNoteButtonClick);
	
	
	// Event listener for closing the notebook modal when clicking the close button
	$('.close').on('click', NotebookModalHandler.handleCloseNotebookModalClick);
	
	
	// Event listener for toggling notebook title edit
	NotebookModalHandler.notebookTitle.on('click', NotebookModalHandler.handleNotebookTitleClick);
	
	
	// Event listener for toggling notebook description edit
	NotebookModalHandler.notebookDescription.on('click', NotebookModalHandler.handleNotebookDescriptionClick);
	
	
	// Event delegation for opening the note modal when clicking on a notebook note card
	NotebookModalHandler.notebookNotesContainer.on('click', '.notebook-note-card', NotebookModalHandler.handleNotebookNoteCardClick);
	
	
	// Event listener for closing the modal when clicking outside the modal content
	$(window).on('click', NoteModalHandler.handleModalOutsideClick);
	
	
	// Event listener for closing the modal when clicking the close button
	$('.close').on('click', NoteModalHandler.handleCloseModalButtonClick);
	
	
	// Event listener for saving the edited note
	NoteModalHandler.saveNoteBtn.on('click', NoteModalHandler.handleSaveNoteButtonClick);
	
	
	// Event delegation for opening the note editing modal when clicking on a note card
	$('.recent-notes-container').on('click', '.note-card, .notebook-note-card', NoteModalHandler.handleNoteCardClick);
	
	
	// Event delegation for opening the notebook modal when clicking on a notebook card
	$('.recent-notes-container').on('click', '.notebook-card', NotebookModalHandler.handleNotebookCardClick);
	
	
	// Event listener for automatically adjusting the height of the textarea
	$('#editNoteContent').on('input', NoteModalHandler.handleAdjustEditNoteContentTextarea);
	
	
});

