var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(10);
buf = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(buf.toString());
});

app.use('/assets',     express.static(__dirname + '/assets'));
app.use('/assets/css', express.static(__dirname + '/assets/css'));
app.use('/assets/js',  express.static(__dirname + '/assets/js'));
app.use('/assets/img', express.static(__dirname + '/assets/img'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
