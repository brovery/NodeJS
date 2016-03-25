'use strict';

var socket = io.connect('http://10.0.112.168:3005');

// Keep track of people; could also be an array
var people = {};

// Listen for mousemove events on the user's browser
document.addEventListener('mousemove', function(event) {
	socket.emit('mousemove', {
		id: socket.id,
		x: event.x,
		y: event.y
	});
});

// listen for the time event from the server
socket.on('time', function(data) {
	document.getElementById('container').innerHTML = data.time;
});

// Listen for move events from the server
socket.on('clientmousemove', function(data) {
	people[data.id] = data;
});

socket.on('playerleft', function(data) {
	console.log(data.id);
	delete people[data.id];
	console.log(people);
});

// setup canvas for drawing
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#1100FF";

// draw all the things
function draw() {
	// clear drawing area
	ctx.clearRect(0, 0, 400, 400);

	// draw all people
	for (var id in people) {
		ctx.fillRect(people[id].x, people[id].y, 10, 10);
	}

	window.requestAnimationFrame(draw);
}
// Call the draw() method on the next frame
window.requestAnimationFrame(draw);

// Helper method to make API call
function getJson(endpoint) {
	return window.fetch(endpoint).then(response => {
		return response.json()
	});
}
