function Program(greeting) {
	this.greeting = greeting;
}

Program.prototype.greet = function() {
	console.log(this.greeting);
};

var p = new Program('hi');
p.greet();

// IIFE
// Types (greeting is string)
// Class (Program)
// Interface (Greeting)

// Arrows & Lexical `this`
// Template Strings
// Default method params
// Spread
// Let
// Modules (Export) (Export Greeting interface)
