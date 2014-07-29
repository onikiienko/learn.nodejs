// http://127.0.0.1:300/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');
var server = new http.Server(function(req, res){

  var urlParsed = url.parse(req.url, true);
  // console.log(urlParsed.pathName);
  // console.log(urlParsed.query.message);
  console.log(req.headers);
  if (urlParsed.pathname == '/echo' && urlParsed.query.message){
    res.setHeader('Cache-control', 'no-cache'); //removeHeader
    res.statusCode = 200; //OK
    res.end(urlParsed.query.message);
  } else {
    res.statusCode = 404;
    res.end('Page Not Found 404');
  }
});
server.on('error', function(err){
  console.log("MY ERROR!!!" + err.message);
})
server.listen(3000, '127.0.0.1');
