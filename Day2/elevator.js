const EventEmitter = require('events');

var elevator = new EventEmitter();

var curLoc = process.argv[3];
var pushed = process.argv[2];


elevator.on('floor1Button', () => {
	console.log('floor', pushed, 'button pushed');
	if (curLoc == pushed) {
		elevator.emit('ding');
	} else {
		setTimeout(function() {
			elevator.emit('closeDoor');
		}, 1000);
	}
});

elevator.on('closeDoor', () => {
	console.log('closing door');
	setTimeout(function() {
		elevator.emit('elevatorMove');
	}, 1000);
});

elevator.on('elevatorMove', () => {
	console.log("Now on floor", curLoc);
	setTimeout(function() {
		if (curLoc == pushed) {
			elevator.emit('ding');
		} else if (curLoc > pushed) {
			curLoc--;
			elevator.emit('elevatorMove');
		} else {
			curLoc++;
			elevator.emit('elevatorMove');
		}
	}, 200);
});

elevator.on('ding', () => {
	console.log("DING!");
	elevator.emit('arrived');
});

elevator.on('arrived', () => {
	console.log('You have arrived at floor', pushed, '!');
	elevator.emit('openDoor');
});

elevator.on('openDoor', () => {
	setTimeout(function() {
		console.log('opening door!');
	}, 1000);
});


elevator.emit('floor1Button');