const express = require("express"),
      app = express();
      
app.get("/", (req, res) => {
  res.send("App is working!");
});

app.listen("8080", (req, res) => {
  console.log("Server started on port 8080");
});