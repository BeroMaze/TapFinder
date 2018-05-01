var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var beersOnTap = require('./BeersOnTap.json');
require('handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.sendFile('index.html', {root:__dirname + '/'});
});


app.post('/breweryInfo', function(req, res) {
  var nameNeeded = req.body.name;
  beersOnTap.forEach(function(each) {
    if (each.breweryName === nameNeeded) {
      res.send(each);
    }
  });
});


  app.listen(3000, function() {
    console.log('server started');
    console.log('listening on PORT: 3000');
  });
