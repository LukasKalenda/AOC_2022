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
