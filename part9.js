//Readable Streams

let http = require('http')
let fs = require('fs')

let myreadStream = fs.createReadStream(__dirname+'/readMe.txt','utf')


myreadStream.on('data',function(chunk){
    console.log('new chunk recieved: ')
    console.log(chunk);
})