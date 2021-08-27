const http = require('http');

const hostname = "localhost";

const port = 3001;

const  server = http.createServer((request, response) => {

	console.log(request.headers);

	response.statusCode = 200;

	response.setHeader('content-type', 'text/html');

	response.end('<html><body><p>Connection successfull</p></body></html>');

});

server.listen(port, hostname, () => {

	console.log(`server running as http://${hostname}:${port}`);
});
