var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(10);
buf = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(buf.toString());
});

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/assets/css'));
app.use(express.static(__dirname + '/assets/js'));
app.use(express.static(__dirname + '/assets/img'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
