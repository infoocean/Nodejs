const http = require('http');

const fs = require('fs');

const path = require('path');

const hostname = "localhost";

const port = 3000;

const  server = http.createServer((request, response) => {

	//console.log(request.headers);

	console.log('request for' , +request.url + 'by method' request.method);

	if(request.method == GET){

         var fileurl;

         if(request.url=='./'){
           
           fileurl = '/index.html';

         }else{

         	fileurl = request.url;
         }

       var filepath = path.resolve('./public' + fileurl);

       var fileextension = path.extname(filepath);

       if(fileextension=='.html'){

       	fs.exists(filepath, (exports)=>{

       		 if(!exists){

       		 	response.statusCode = 400;

	            response.setHeader('content-type', 'text/html');

	            response.end('<html><body><p>error 404' + fileurl + ' does not exists </p></body></html>');

       		 }
       	});

       }

	}else{


	}

	response.statusCode = 200;

	response.setHeader('content-type', 'text/html');

	response.end('<html><body><p>Connection successfull</p></body></html>');

	

});

server.listen(port, hostname, ()=>{

	console.log(`server running as http://${hostname}:${port}`);
});
