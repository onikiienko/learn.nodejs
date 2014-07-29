var http = require('http');

var server = new http.Server(); //http.Server -> net.Server -> EventEmitter

server.listen(3000, '127.0.0.1');

var counter = 0;
server.on('request', function(req, res) {
  res.end('Привет, мир!' + ++counter);
})
