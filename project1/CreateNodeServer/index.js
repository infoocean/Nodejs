//server details
const http = require('http');
//file system
const fs = require('fs');
//file path
const path = require('path');

const hostname = 'localhost';

const port = 3000;

const server = http.createServer( (request, response) => {
           
    //console.log(request.headers); 

    console.log('request for' + request.url + 'by method' + request.method);

        if(request.method == 'GET'){

            var fileUrl;

            if(request.url=='/'){
                 
                fileUrl = '/index.html';

            }else{

                fileUrl = request.url;
            }

            var filepath = path.resolve('./public'+fileUrl);

            const fileext = path.extname(filepath);

            if(fileext == '.html'){

                fs.exists(filepath, (exists) => {
                     
                     if(!exists){

                        response.statuscode = 400;

                        response.setHeader('Content-Type', 'text/html');   

                        response.end('<html><body><p>error 404'  +fileUrl+ ' does not exixts </p></body></html>'); 

                     }
                        
                    response.statuscode = 200;

                    response.setHeader('Content-Type', 'text/html');   

                    fs.createReadStream(filepath).pipe(response);

                });

            }else{
              
                response.statuscode = 400;

                response.setHeader('Content-Type', 'text/html');   

                response.end('<html><body><p>error 404'  +fileUrl+ ' does not html file </p></body></html>'); 

            }

          } else{

           response.statuscode = 400;

           response.setHeader('Content-Type', 'text/html');   

           response.end('<html><body><p>error 404'  +fileUrl+ ' not supoted </p></body></html>'); 
     } 
});

server.listen(port, hostname, () => {

	  console.log(`serer running as http://${hostname}:${port}`);
});

