// Data Types in JavaScript

// on the basis of storage and accessing the data in the memory, it is defined into 2 categories
// 1. primitive -> it is done by call by value
//    becoz inka jo actual data hain wo humko actual main nahi diya jata hain, inka copy humko diya jata hain
//    and then we make changes in the copy
//    7-types : String, Number, Boolean, null(null means empty not 0), undefined(var declare hai memory space declare hai but value assign nahi ki hain),
//              Symbol(value ko unique bnane k liye), BigInt

// 2. non-primitive(referenced type)
//    Array, Objects, Functions

const score = 100
const scoreValue = 100.4
const loggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('234')
const anotherId = Symbol('234')

console.log(id)
console.log(anotherId)
console.log(id == anotherId)
console.log(id === anotherId)

const bigNumber = 4343545565654n  // BigInt

// Reference (Non primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "nagraj", "doga"];     // Array

let myObj = {                       // Objects are the key-value pairs jisko humne myObj main store kiya hain
    name : "Diwaker", 
    age : 21,

}


// function  => aur chahe toh function ko kisi variable main bhi store kar sakte hain
const myFun = function(){
    console.log("Hello World")
}

console.log(typeof(loggedIn))
console.log(typeof(outsideTemp))
console.log(typeof(bigNumber))
console.log(typeof(heroes))
console.log(typeof(myObj))         // function returns its data type as function but it is the an object function
console.log(typeof(myFun))
console.log()
console.log(typeof(null))
console.log(typeof(undefined))
console.log(typeof(Boolean))