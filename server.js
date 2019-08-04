const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/", function(req, res) {
  res.send("Hello World");
});
 

app.post("/api/string", function(req, res) {
  console.log("Sending script:", req.body.str);
  // res.send("sups");
 
  var request = require('request');

  var program = {
    script: req.body.str,
    language: "cpp14",
    versionIndex: "2",
    clientId: "16bb31904ee775fc33bb52097d381021",
    clientSecret: "d310ac3ca498f29d6154b2bf297f6263196cd7e7ac45080baf0b5ca68cf3d0f0"
  };
  request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
  },
    function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(body);
    });

});

var server = app.listen(5000, function() {
  console.log("Server running on port 5000");
});
