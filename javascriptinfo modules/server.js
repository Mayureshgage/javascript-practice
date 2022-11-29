const http = require('http');
const server = http.createServer();
server.listen(3002,function() {
    console.log('listening at port 3002')
});