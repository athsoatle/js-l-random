let fs = require('fs');
let filename = __dirname + '/data.json';

console.time('rfSync');
let data = fs.readFileSync(filename, 'utf-8');
console.info(data);
console.timeEnd('rfSync');

fs.readFile(filename, 'utf-8', function (err, data) {
    if(err) {
        console.error(err.stack);
    } else {
        console.log(data);
    }
})