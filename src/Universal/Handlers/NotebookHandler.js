
// NotebookManager Class Definition
export default class NotebookHandler {
  // Notebook Class Definition
  static Notebook = class {
    constructor(title = '', description = '', collection = [], modified = new Date()) {
      this.title = title;
      this.description = description;
      this.collection = collection;
      this.created = new Date().toString()
      this.modified = modified.toString()
    }

  };
}
