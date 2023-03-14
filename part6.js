//reading and writing files


//  readfile

 let fs = require('fs')    //(fs) means file system

 let readFile = fs.readFileSync('readMe.txt','utf8')
 console.log(readFile);
// --- another  way
fs.readFile('readME.txt','utf8',function(err,data){
    console.log(data);
})



// writefile

let fs = require('fs');
// let readFile = fs.readFileSync('readMe.txt','utf8')
// fs.writeFileSync('writeMe.txt',readFile)
fs.readFile('readME.txt','utf8',function(err, data){
    fs.writeFileSync('writeMe.txt', data);
});




