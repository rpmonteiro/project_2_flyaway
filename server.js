var express = require('express');
var app = express();
var path = require('path');
var datepickk = require('datepickk');
var moment = require('moment-timezone');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var index = require('./routes');

app.use(express.static('client/build'));
app.use(bodyParser.json());

app.get('/airports', index.airports);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, + 'client/build/index.html'));
})

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
