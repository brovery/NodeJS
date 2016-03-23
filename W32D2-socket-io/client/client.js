'use strict';
var socket = io.connect('http://localhost:3000');

document.addEventListener('mousemove', function(event) {
	//console.log(event.x, event.y);
	socket.emit('mousemove', { x: event.x, y: event.y });
});


socket.on('time', function(data) {
	//console.log(data);
	document.getElementById('container').innerHTML = data.time;
	//socket.emit('my other event', {my: 'data'});
});

socket.on('clientmousemove', function(data) {
	console.log(data.id + ":", data.x, data.y);
});

function getJson(endpoint) {
	return window.fetch(endpoint).then(response => {
		return response.json();
	});
}
