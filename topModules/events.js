var EventEmitter = require('events').EventEmitter;
var util = require('util');

var server = new EventEmitter;

server.on('request', function(request){
	request.approved = true;
});

server.on('request', function(request){
	console.log(request);
});

server.emit('request', {from: 'Client'});
server.emit('request', {from: 'One more client'});

console.log(util.inspect(server.listeners('request')));