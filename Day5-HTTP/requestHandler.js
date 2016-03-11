module.exports = handleRequest;
const fs = require("fs");

function handleRequest(socket, data) {
    var headers = parseHeaders(data);
    var requestedResource = headers[0].split(" ");
    var path = requestedResource[1].slice(1);
    var response = [];

    if (path === "") {
        getTheFile(socket, response, "index.html");
    } else {
        getTheFile(socket, response, path);
    }

}

function parseHeaders(data) {
    return data.split("\r\n");
}

function getTheFile(socket, response, path) {
    return fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        response.push("HTTP/1.1 200 OK");
        response.push("Content-Type: text/html; charset=UTF-8");
        response.push("Content-Length: " + data.length);
        response.push("");
        response.push(data);
        socket.write(response.join("\r\n"));
    });
}