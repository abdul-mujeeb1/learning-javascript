const elf = {
    name: "orwell",
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

// here we multiple elfs like charatcers which wil fight with one another 
// we must need blueprint or encpasulation here which grouped functionalities
// together otherwise we have alot of reopeated objects like elf2 , elf3.

// Factory functions
// function that create object for us or act like factory which create objects

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}

const Peter = createElf('Peter', 'stones')
Peter.attack()

const Sam = createElf('Sam', 'fire')
Sam.attack()

// Drawback
// we have to store data in meory like sam and peter so on we have 1000 elfs then we have 1000 attack functions in memory
//lets try with shared function & Object.create()
// Protype inheritance ----

const elfFunctionStore = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctionStore)
    console.log(newElf.__proto) // show attack function
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())

const sam = createElf('Sam', 'fire')
console.log(sam.attack())
// true protypal inheritance code easy to understand and less

