
var livereload = require('livereload');
var server = livereload.createServer();

["node_modules", "app", "share"].forEach((dir) => {
    server.watch(__dirname + '/' + dir);
});

server.watch(__dirname + "/public");
