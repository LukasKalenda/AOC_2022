let p = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 3)

    if(random == 1) {
        resolve("vyšlo to!")
    } else reject("třeba příště")
})

p.then((message) => {
    console.log("Vyhrál jsi, " + message)
}).catch((message) => {
    console.log("Nevadí, " + message)
})

class Obdelník {
    vyska;
    sirka;

    constructor(vyska, sirka) {
        this.vyska = vyska;
        this.sirka = sirka;
    }
    vypocitejObsah() {
        return this.sirka * this.vyska;
    }
    vypocitejObvod() {
        return 2 * (this.sirka + this.vyska)
    }
}
//Obdélník s výškou 6 a šířkou 4
const prvniObdelnik = new Obdelník(6,4)
console.log(prvniObdelnik.vypocitejObsah())

class Ctverec extends Obdelník {

    constructor(vyska) {
        super(this.vyska)
    }

    vypocitejObsahCtverce() {
        return this.vyska * this.vyska
    }
}

const prvniCtverec = new Ctverec(10)
console.log(prvniCtverec.vypocitejObsahCtverce())

const studnt = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error¨

const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
