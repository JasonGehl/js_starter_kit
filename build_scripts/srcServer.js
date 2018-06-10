import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */

//set port number and start Express
const PORT_NUMBER = 3000;
const app = express();

//set up the webpack compiler
const compiler = webpack(config);

//set the app to use webpack
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//handle routes with function
app.get('/', function(request, response){
  //return set file from filesystem
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

//example API response
app.get('/users', function(req, res){
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email":"tnorton@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email":"lee.tina@hotmail.com"}
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
