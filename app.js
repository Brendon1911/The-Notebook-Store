// Load the things we need
const express = require("express"),
      mongoose = require("mongoose"),
      path = require("path"),
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
      
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to ejs
app.set("view engine", "ejs");

// Render Home page
app.get("/", (req, res) => {
  
  let notebooks = [
      {
        make: "Dell"   ,
        model: "Insperion",
        image: "https://i5.walmartimages.com/asr/30479c85-5ec5-41be-a289-83d235cf0207_1.b94e70cc3d493cac7380cb0ef5aa636e.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
        price: "$100.95"
      },
      {
        make: "Acer"   ,
        model: "Aspire",
        image: "https://assets.pcmag.com/media/images/352181-acer-aspire-e1-510p-2671.jpg?width=1000&height=804",
        price: "$100.95"
      },
      {
        make: "Mecer"   ,
        model: "Xpression",
        image: "https://media.takealot.com/covers_tsins/51572818/Z140CPLUS-1-zoom.jpg",
        price: "$100.95"
      }
  ];
  
  res.render("pages/index", {
    pageTitle: "All Notebooks",
    notebooks: notebooks
  });
});

app.listen("8080", (req, res) => {
  console.log("Server started on port 8080");
});