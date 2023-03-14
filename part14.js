// Basic Routing

let fs = require('fs')
// Creating a Server

let http = require('http');


let server = http.createServer(function(req,res){
    // console.log('requiest was made '+req.url)
    if(req.url ==='/home' || req.url ==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    
    }else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }else if(req.url === '/api/ridoy'){
        let info = [{name : 'Ridoy',age:23}]
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(info))

    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/error.html').pipe(res)
    }
   
})
console.log(server)
server.listen(3000,'127.0.0.1');
console.log('yo dawgs , now listening to port 3000')