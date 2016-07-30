console.log("hello from app.js");

var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
var path = require('path');

// --------------------------------------------------------

// Home
app.get('/',function( req, res ){
  console.log( 'at base url' );
  res.sendFile( path.resolve( 'views/index.html' ));
});

// Spinning up the server
app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Listening on port 3000");
});

// --------------------------------------------------------

// Setting up static folder
app.use( express.static( 'public' ) );
