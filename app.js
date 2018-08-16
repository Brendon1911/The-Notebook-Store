// Load the things we need
const express = require("express"),
      mongoose = require("mongoose"),
      app = express();

// Setup database    
let db = mongoose.connect("mongodb://localhost:27017/the_notebook_store", { useNewUrlParser: true });

// Test database connection
mongoose.connection.on('connected', (err, db) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to " + db);
  }
});
      
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