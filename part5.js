// //Node Event Emitter

// let events = require('events')
// let myEmitter = new events.EventEmitter()

// myEmitter.on('someEvent',function(msg){
//     console.log(msg)
// })

// myEmitter.emit('someEvent','the event was emmited')



let events = require('events');
let util = require('util');

let Person =function(name){
    this.name = name;
};

util.inherits(Person,events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');
let people = [james,mary,ryu];


people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + 'said: '+msg);
    });
});
james.emit('speak','hey dudes');
ryu.emit('speak','i want a curry');