////var consoleLib = require("./consolelib.js");
//var consoleLib = require("./toupper.js");
//var tolower = require("./libs");
//var lodash = require("lodash");
//
////console.log(consoleLib.toUpper("hello world"));
////console.log(consoleLib("hello world"));
//
//var users = [
//    { 'user': 'fred',   'age': 48 },
//    { 'user': 'barney', 'age': 34 },
//    { 'user': 'fred',   'age': 42 },
//    { 'user': 'barney', 'age': 36 }
//];
//
//console.log(lodash.orderBy(users, ["user", "age"]));

//var http = require("http");
var _ = require("lodash");
var parseArgs = require("minimist");
var argv = parseArgs(process.argv.slice(2));

console.log(argv._);

var sumOfEvens = 0;
var count = 0;
var sumOfOdds = 0;

for (var i = 0; i < argv._.length; i++) {
    if (argv._[i]%2 == 0) {
        sumOfEvens += argv._[i];
    } else {
        sumOfOdds += argv._[i];
        count++;
    }

}

console.log("Sum of evens: " + sumOfEvens);
console.log("Average of odds: " + (sumOfOdds/count));

//average of odds, sum of evens


//var server = http.createServer(function(req, res) {
//    if (_.startsWith(req.url, "/path/something")) {
//        res.write("<h1>" + req.url + "</h1>");
//    } else {
//
//    }
//
//
//    res.end();
//});
//
//server.listen(3000, function() {
//    console.log("Server is ready");
//});