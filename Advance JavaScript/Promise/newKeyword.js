// study after prototype

// let myName = "diwaker          "

// console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammmer",
    spiderman: "sling", 

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.diwaker = function(){
    console.log(`diwaker is present in all objects`)
}

// heroPower.diwaker()
myHeros.diwaker()

// concept:
// function---->object---->null
// array------->object---->null
// string------>object---->null

// iss main humne direct root ko hi power de di hain and also children ko bhi means humne poore path main aane wale sabko power de di hain (isliye heroPower and myHeros dono main hi sahi output print hoga)