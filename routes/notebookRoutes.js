module.exports = (app) => {
  let notebook = require("../controllers/notebookController");
  
  // notebook routes
  app.route("/notebooks")
    .get(notebook.show_all_notebooks)
    .post(notebook.add_a_notebook);
    
  app.route("/notebooks/:notebookId")
    .get(notebook.show_a_notebook)
    .put(notebook.update_a_notebook)
    .delete(notebook.delete_a_notebook)
};