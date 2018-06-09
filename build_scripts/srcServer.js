var express = require('express');
var path = require('path');
var open = require('open');

//set port number and start Express
var port = 3000;
var app = express();

//handle routes with function
app.get('/', function(request, response){
  //return set file from filesystem
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

//set express to listen on the port
app.listen(port, function(err){
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
