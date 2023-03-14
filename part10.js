//Writable Streams

let http = require('http')
let fs = require('fs')

let myreadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8')
let mywriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')


myreadStream.on('data',function(chunk){
    console.log('new chunk recieved: ')
    mywriteStream.write(chunk)
})