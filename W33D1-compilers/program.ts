import { Greeting } from './greeting.ts';


class Program {
	constructor(public greeting: Greeting) {
		
	}
	
	greet(...n: Array<number>) {
		n.forEach(i => {
			console.log(i);
		});
	}
}

var p = new Program({
	text: 'hi', 
	name: 'Brandon'
});
p.greet(1,2,3,4,5,6,6,7,8,9);




// Interface (Greeting)
// Class (Program)
// IIFE
// Types (greeting is string)

// Arrows & Lexical `this`
// Template Strings
// Default method params
// Spread
// Let
// Modules (Export) (Export Greeting interface)
