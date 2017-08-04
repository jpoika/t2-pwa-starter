//var https = require('https');
var http = require('http');
var fs = require('fs');
var express = require('express');

// var options = {
//     key: fs.readFileSync( './localhost.key' ),
//     cert: fs.readFileSync( './localhost.cert' ),
//     requestCert: false,
//     rejectUnauthorized: false
// };

var app = express();
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var port = 3016;
var server = http.createServer( app );

server.listen( port, function () {
    console.log( 'Express server listening on port ' + server.address().port );
} );
