// Load the things we need
const express = require("express"),
      path = require("path"),
      app = express();
      
app.use(express.static(path.join(__dirname, 'public')));

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