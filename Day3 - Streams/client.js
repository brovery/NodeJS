var net = require("net");

var client = new net.Socket();
client.connect(8888, "10.0.112.183", function() {
    console.log("Connected");
    process.stdin.setEncoding("utf8");

    process.stdin.on("readable", function() {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            client.write(chunk);
        }
    });
});

client.on("data", function(data) {
    process.stdout.write(data);
});