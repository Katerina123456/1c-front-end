var express = require('express');
var app = express();
 var server = require('http').createServer(app);
 var io = require('socket.io').listen(server);
 server.listen(591);
 app.get('/', function(request, respons) {
     respons.sendFile(___dirname + '/index.html');
});
connections = [];
io.sockets.on('connection', function(socket) {
    console.log("Успешное соединение!");
    connections.push(socket);
    socket.on("disconnect", function(data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Отключились!");
    });
    socket.on('send mess', function(data) {
        io.sockets.emit('add mess', {mess: data.mess, name: data.name,
        className: data.className});
    });
});