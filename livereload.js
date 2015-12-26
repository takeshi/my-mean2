
var livereload = require('livereload');
var server = livereload.createServer();

["node_modules", "client", "share"].forEach((dir) => {
    server.watch(__dirname + '/' + dir);
});

server.watch(__dirname + "/public");

server.watch(__dirname + "/dist/client");