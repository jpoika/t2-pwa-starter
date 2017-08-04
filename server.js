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

// var path = require('path');
// var express = require('express');
// var https = require('https');
// var app = express();
// var credentials = {key: null, cert: null};
// app.use(express.static('dist'));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });
// var httpsServer = https.createServer(credentials, app)
// httpsServer.listen(3014, function(err) {
//   if (err) {
//     return console.error(err);
//   }

//   console.log('Listening at http://localhost:3014/');
// });
