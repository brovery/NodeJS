var fs = require("fs");

var reader = fs.createReadStream("input.txt");
var writer = fs.createWriteStream("output.txt");

var data = "";
reader.on("data", function(chunk) {
    data += chunk;
    writer.write(chunk);
});

reader.on("end", function() {
    console.log(data);
    writer.end();
});

writer.on("finish", function() {
    console.log("writer end");
});