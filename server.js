var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static('app/public'));
app.use(express.static('app/public', {index: 'index.html'}))

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./app/routing/api-routes')(app);
require('./app/routing/html-routes')(app);

var port = process.env.PORT || 8080;

app.listen(port, function () {
});