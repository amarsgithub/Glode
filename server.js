const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

// app.get("/api/string", function(req, res) {
//   // console.log(req.body.string);
//   console.log("did it console");
//   res.send("did it");
// });
app.post("/api/string", function(req, res) {
  // console.log(req.body.string);
  console.log("did it console");
  res.send("did it");
});

var server = app.listen(5000, function() {
  console.log("Server running on port 5000");
});
