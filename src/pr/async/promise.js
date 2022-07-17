'use strict';

let fs = require('fs');
let filename = __dirname + '/data.json';

let promise = new Promise(
    function(resolve, reject) {
        fs.readFile(filename, 'utf-8', function (err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
);

promise.then(function (data) {
    console.log(data);
}, function (err) {
    console.error(err);
});