let http = require('http');


let server = new http.Server();

server.on('request', (req, res) => {
    res.end('Hi !');
});

server.listen('8080');