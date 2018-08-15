// Load the things we need
const express = require("express"),
      mongoose = require("mongoose"),
      app = express();
      
mongoose.connect("mongodb://localhost/the_notebook_store", { useNewUrlParser: true });
      
// Set view engine to ejs
app.set("view engine", "ejs");

// Render Home page
app.get("/", (req, res) => {
  res.render("pages/index", {
    pageTitle: "Home Page"
  });
});

app.listen("8080", (req, res) => {
  console.log("Server started on port 8080");
});