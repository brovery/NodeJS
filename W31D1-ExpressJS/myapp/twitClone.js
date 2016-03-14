var express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var count = 1;
var tweets = "";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {


    fs.readdir("tweets/", (err, files) => {
        if (err) res.send(err);
        count = files.length+1;

        for (var i = 0; i < files.length; i++) {
            fs.readFile("tweets/" + files[i], 'utf8', (err, data) => {
                if (err) res.send(err);
                else {
                    tweets += data + '\n';
                }
            });
        }
        res.send(tweets);
    });
});

app.post('/', function (req, res) {
    var params = JSON.stringify(req.query);
    console.log(params);

    fs.writeFile('postfile.txt', params, (err) => {
        if (err) res.send(err);
        res.send("Post appended to postfile.txt");
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});