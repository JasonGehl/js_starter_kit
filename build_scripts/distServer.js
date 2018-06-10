import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

//set port number and start Express
const PORT_NUMBER = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

//handle routes with function
app.get('/', function(request, response){
  //return set file from filesystem
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

//example API response
app.get('/users', function(req, res){
  res.json([
    {'id': 1, 'firstName': 'Bob', 'lastName': 'Smith', 'email':'bob@gmail.com'},
    {'id': 2, 'firstName': 'Tammy', 'lastName': 'Norton', 'email':'tnorton@yahoo.com'},
    {'id': 3, 'firstName': 'Tina', 'lastName': 'Lee', 'email':'lee.tina@hotmail.com'}
  ]);
});

//set express to listen on the port
app.listen(PORT_NUMBER, function(err){
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + PORT_NUMBER);
  }
});
