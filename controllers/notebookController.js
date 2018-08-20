const mongoose = require("mongoose"),
      Notebook = mongoose.model("Notebook");

// Show all notebooks
exports.show_all_notebooks = (req, res) => {
  Notebook.find({}, (err, notebook) => {
    if (err) 
      return res.send(err);
    res.json(notebook);
  });
};

// Add a notebook to the database
exports.add_a_notebook = (req, res) => {
  let notebook = new Notebook(req.body);
  
  notebook.save((err, notebook) => {
    if (err)
      return res.send(err);
    res.json(notebook);
  });
};

// Show a single notebook
exports.show_a_notebook = (req, res) => {
  Notebook.findById(req.params.notebookId, (err, notebook) => {
    if (err)
      return res.send(err);
    res.json(notebook);
  });
};

// Update a notebook
exports.update_a_notebook = (req, res) => {
  Notebook.findOneAndUpdate({
    _id: req.params.notebookId
  }, req.body, { new: true }, (err, notebook) => {
    if (err)
      return res.send(err);
    res.json(notebook);
  });
};


// Delete a notebook
exports.delete_a_notebook = (req, res) => {
  Notebook.remove({
    _id: req.params.notebookId
  }, (err, notebook) => {
    if (err)
      return res.send(err);
    res.json({ message: "Notebook successfuly deleted" });
  });
};
