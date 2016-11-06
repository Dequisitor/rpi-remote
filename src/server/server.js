var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.resolve('dist/client')));
app.use(express.static(path.resolve('node_modules')));

app.get('/', function(req, res) {
	res.sendFile(path.resolve('dist/client/index.html'));
});

var server = app.listen(3000, '127.0.0.1', function() {
	console.log('server started on ' + server.address().address + ':' + server.address().port);
});
