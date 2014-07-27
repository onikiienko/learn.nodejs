var util = require('util');

// INSPECT
var obj = {
	a : 5,
	b : 6
}
obj.self = obj;
console.log( util.inspect(obj));

// FORMAT
var str = util.format("My %s %d %j", "string", 123, {test: "obj"});
console.log( str );


// INHERTS

function Animal(name){
	this.name = name;
}

Animal.prototype.walk = function(){
	console.log('Ходит ' + this.name);
}

function Dog(name){
	this.name = name;
}

// сначала наследование, потом прототип!!!
util.inherits(Dog, Animal);

Dog.prototype.run = function(){
	console.log('Бегает ' + this.name);
}


var dog = new Dog('Charlie');

dog.walk();
dog.run();