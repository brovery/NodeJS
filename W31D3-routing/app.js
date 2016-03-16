var express = require('express');
const fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var transactions = [];

fs.readFile('mock_data.json', 'utf8', (err, data) => {
    if (err) throw err;
    transactions = JSON.parse(data);
    console.log("Data read!");
});

app.get('/', (req, res) => {
    var params = (req.headers.id);
    console.log(params);
    var found = false;

    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].id == params) {
            found = true;
            res.send(transactions[i]);
        }
    }

    if (!found) res.send("Unable to find transaction!");
});


// Create record.
app.post('/', (req, res) => {
    var id = transactions.length+1;
    var data = req.headers;

    transactions.push({
        id: id,
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        city: data.city,
        ip_address: data.ip_address,
        money: data.money
    });

    console.log(transactions[transactions.length-1]);

    res.send("User added");
});

// Update record.
app.put('/', (req, res) => {
    var data = req.body;
    var found = false;

    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].id == data.id) {
            found = true;
            var keys = Object.keys(data);
            for (var j = 0; j < keys.length; j++) {
                transactions[i][keys[j]] = data[keys[j]];
            }
        }
    }

    console.log(transactions[999]);
    if (!found) {
        res.send("Record not found.");
    } else {
        res.send("Record updated.");
    }
});

app.delete('/', (req, res) => {

    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].id == req.headers.id) {
            transactions.splice(i, 1);
            found = true;
            res.send("Transaction deleted");
        }
    }

    res.end('Transaction not found!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});