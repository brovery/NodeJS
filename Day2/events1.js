const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('event', (data, data2) => {
	console.log('an event occurred:', data, data2);
});

emitter.emit('event', 'Woo-Hoo!', 'So Bored.');
