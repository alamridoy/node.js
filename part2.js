//    Function Expressions



// let createFun = function(){
//     console.log('hello i am new function');
// }
// createFun()





function myfunction(newfun){
    newfun()
}


let newfun = function(){
    console.log('This is new function')
}

myfunction(newfun)