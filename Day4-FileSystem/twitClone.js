const fs = require("fs");
const net = require("net");
const events = require("events");
const serverEmitter = new events.EventEmitter();
const broadcastName = "onmessage";
var count = 1;
var tweetfiles = [];

fs.readdir("tweets/", (err, files) => {
    if (err) throw err;
    count = files.length+1;

    for (var i = 0; i < files.length; i++) {
        fs.readFile("tweets/" + files[i], 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    }
    console.log(tweetfiles);
});



var server = net.createServer(function(socket) {
    socket.write("Server is here\n");
    serverEmitter.on(broadcastName, onMessageReceived);

    var data = "";
    socket.on("data", function(chunk) {
        data += chunk.toString("utf8");
        if (data.endsWith("\n")) {
            fs.writeFile('tweets/tweet' + count + ".txt", data, (err) => {
                if (err) throw err;
                count++;
                data = "";
                console.log(data);
            });
        }
    });

    function onMessageReceived(data) {
        console.log("Hello there!");
    }

});

server.listen(8888);