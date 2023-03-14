//Module Patterns


let counter = function(arr){
    return 'Here is '+arr.length + ' elements in this array'
}

let added = function(a,b){
    return `sum two number is ${a+b}`
}

let pi = 3.142


module.exports ={
    counter:counter,
    added:added,
    pi:pi
}


