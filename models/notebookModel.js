// Bring in the things we need
const mongoose = require("mongoose"),
      Schema = mongoose.Schema;
      
// Notebook Schema
const notebookSchema = new Schema({
  make: String,
  model: String,
  imageURL: String,
  price: Number
});

// Notebook model
const Notebook = mongoose.model("Notebook", notebookSchema);

// Make available to the rest of the app
module.exports = Notebook;

