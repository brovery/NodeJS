const fs = require('fs');

fs.stat('file.txt', (error, stats) => {
    if (error) {
        console.log("No file!");
        fs.writeFile('file.txt', "This is my new file!", (err) => {
            if (err) throw err;
            console.log("Created new file.");
        });
    } else {
        fs.readFile('file.txt', 'utf8', (err, data) => {
            if (err) throw err;
            fs.appendFile('file.txt', '\nThis is my appended text!', (err) => {
                if (err) throw err;
                console.log("appended to existing file.");
            });
        });

        // Read contents of one file and append it to another file.
        fs.stat('newfile.txt', (err, stats) => {
            if (err) throw err;
            fs.readFile('file.txt', 'utf8', (err, data) => {
                if (err) throw err;
                fs.appendFile('newfile.txt', data, (err) => {
                    if (err) throw err;
                    console.log("Appended file.txt to newfile.txt.");
                });
            });
        });
    }
});

fs.stat('readonly.txt', (err, stats) => {
    if (err) throw err;
    fs.appendFile('readonly.txt', "Hi there!", (err) => {
        if (err) throw err;
    });
});
