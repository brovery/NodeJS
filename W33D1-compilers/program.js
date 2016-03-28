"use strict";
var Program = (function () {
    function Program(greeting) {
        this.greeting = greeting;
    }
    Program.prototype.greet = function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i - 0] = arguments[_i];
        }
        n.forEach(function (i) {
            console.log(i);
        });
    };
    return Program;
}());
var p = new Program({
    text: 'hi',
    name: 'Brandon'
});
p.greet(1, 2, 3, 4, 5, 6, 6, 7, 8, 9);
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
