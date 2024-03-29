// server.js

// set up =======================================
var express  = require('express');
var app      = express(); 								       // create our app w/ express
var mongoose = require('mongoose'); 				     // mongoose for mongodb
var port = process.env.PORT || 80;             // set the port
var morgan = require('morgan'); 			           // log requests to the console (express4)
var bodyParser = require('body-parser'); 	       // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================================
app.use(express.static(__dirname + '/')); 				        // set the static files location /public/img will be /img for users
app.use(morgan('dev')); 										                    // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			      // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									                  // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// application ---------------------------------------------
app.get('*', function(req, res) {
  res.sendfile('./index.html'); // load the single view file
});

// listen (start app with node server.js) ==================
app.listen(port);
console.log("App is listening on port " + port);
