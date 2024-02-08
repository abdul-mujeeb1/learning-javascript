// Constructor Function - approach closeed to OOP
// new keyword automatically returns the object for us
// Any function that invoked with the new keyword calls the constructor function


function Elf(name, weapon) {
    // only constructing; return nothing
    this.name = name;
    this.weapon = weapon;
}

const peter = Elf('Peter', 'stones')
console.log(peter.name)

const sam = Elf('Sam', 'fire')
console.log(sam.name)

//BTS

const Elf1 = new Function('name', 'weapon',
    ` this.name = name;
this.weapon = weapon;`);


// new keyword points execution context this to the current object otherwise 
// it will not work it is working bcz JS function is special type of object also got __proto__
// when we have constrcutor functio this __proto__ will usefull 
// we are adding the proto type method in constructor function

Elf.prototype.attack = function () {
    return 'attack with' + this.weapon
}

const sarah = new Elf1('Sarah', 'fireworks')
console.log(sarah);