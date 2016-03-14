var express = require('express');
const fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    //var curDate = new Date();
    //res.send(curDate.getHours() + ":" + curDate.getMinutes());

    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) res.send(err);
        res.send(data);
    });
});

app.post('/', function (req, res) {
    var params = JSON.stringify(req.query);
    console.log(params);

    fs.appendFile('postfile.txt', '\n'+params, (err) => {
        if (err) res.send(err);
        res.send("Post appended to postfile.txt");
    });
});

app.delete('/', function (req, res) {
    res.send('Delete Request Made\n');
});

app.put('/', function (req, res) {
    res.send('Put Request Made\n');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});