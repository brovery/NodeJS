var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/api/time', function (req, res) {
	res.send({time: new Date().getTime()});
});

io.on('connection', function (socket) {
	setInterval(function() {
		socket.emit('time', { time: new Date().toLocaleTimeString() });
	}, 1000);

	socket.on('mousemove', function(data) {
		//console.log('mousemove', data);

		data.id = socket.id;

		socket.emit('clientmousemove', data);
	});
});



server.listen(3000, function() {
	console.log('App listening on port 3000...');
});




//
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//
//app.use('/', express.static(__dirname + '/client'));
//app.use('/node_modules', express.static(__dirname + '/node_modules'));
//
//app.get('/api/time', function(req, res) {
//	res.send({
//		time: new Date().getTime()
//	});
//});
//

