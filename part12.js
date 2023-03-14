// serving html page



let fs = require('fs')




// Creating a Server

let http = require('http')

let server = http.createServer(function(req,res){
    // console.log('requiest was made '+req.url)
    res.writeHead(200,{'Content-Type':'text/html'});
    let myreadStream = fs.createReadStream(__dirname+'/index.html','utf8')



myreadStream.pipe(res)


})
server.listen(3000,'127.0.0.1');
console.log('yo dawgs , now listening to port 3000')