const http = require('http');
const server = http.createServer(function(request,response) {
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end('Hello world');
    console.log("Hello from node");
    server.listen(8000);
})