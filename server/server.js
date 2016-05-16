var http = require("https");
var fs = require("fs");

http.createServer(function (request, response) {

  if(request.url === "/"){
    fs.readFile("../client/index.html", function (err, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });
	}else{
    // HTTP Status: 404 : Not Found
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('404: Not found');
  }

}).listen(8081);

// Console will print the message
console.log('Server running at localhost:8081/');
