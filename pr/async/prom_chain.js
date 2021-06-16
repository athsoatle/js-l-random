'use strict';

let fs = require('fs');
let filename = __dirname + '/data.json';

let promise = new Promise(
    function (resolve, reject) {
        fs.readFile(filename, 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
);

function identity(data) {
    return data;
}

function thrower(err) {
    throw err;
}

function getDefault() {
    return {name: 'Leha'};
}

function getAvatar(data) {
    let name = data.name;
    return request('https://my.avatar/' + name);
}

promise
    .then(JSON.parse, thrower)
    .then(identity, getDefault)
    .then(getAvatar, thrower)
    .then(identity, console.error);
//same
promise
    .then(JSON.parse)
    .catch(getDefault)
    .then(getAvatar)
    .catch(console.error);

