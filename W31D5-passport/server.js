var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(3000, function() {
	console.log('App listening on port 3000...');
});
