import express from 'express';
import path from 'path';
import open from 'open';

//set port number and start Express
const PORT_NUMBER = 3000;
const app = express();

//handle routes with function
app.get('/', function(request, response){
  //return set file from filesystem
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

//set express to listen on the port
app.listen(PORT_NUMBER, function(err){
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + PORT_NUMBER);
  }
});
