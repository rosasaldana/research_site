var path = require('path'),  
    express = require('express'), 
    bodyParser = require('body-parser'),
    config = require('./config');

module.exports.init = function() {
  //initialize app
  var app = express();

  //body parsing middleware 
  app.use(bodyParser.json());
  
  // static files
  app.use(express.static('client'));  

  // put at the end in case the first one is not used
  app.use(function(req, res) {
    res.redirect('/');
  });

  return app;
};  
