// Load the things we need
const express = require("express"),
      mongoose = require("mongoose"),
      path = require("path"),
      bodyParser = require("body-parser"),
      app = express();

// Connect to database    
mongoose.connect("mongodb://localhost:27017/the_notebook_store", { useNewUrlParser: true });

// Test database connection
mongoose.connection.on('connected', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

// Set static file path
app.use(express.static(path.join(__dirname, 'public')));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Set view engine to ejs
app.set("view engine", "ejs");

// Render Home page
app.get("/", (req, res) => {
  
  res.render("pages/index", {
    pageTitle: "All Notebooks"
  });
  
});

app.listen("8080", (req, res) => {
  console.log("Server started on port 8080");
});