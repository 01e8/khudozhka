var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('port', 3000);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  if (req.url == '/') {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url == '/en') {
    res.sendFile(path.join(__dirname + '/public/index-stat-eng.html'));
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url == '/ru') {
    res.sendFile(path.join(__dirname + '/public/index-stat-rus.html'));
  } else {
    next();
  }
});

app.use(function(req, res) {
  res.status(404).send("Page Not Found Sorry");
});
