// truthy value and falsy value

// In JS, truthy value is a value that is considered true when encountered in a Boolean context. 
// All values are truthy unless they are defined as falsy. 
// This is, all values are truthy except false , 0 , -0 , 0n , "", null, undefined, NaN , document.

// Truthy and Falsy value means assume kar liya jata hain ki ye sahi hi hoga ya galat hi hoga

const userEmail = "d@diwaker.ai"

if (userEmail) {        // main thing to notice is that ki hamare pas if main comparison nahi kiya hain just assume kar ke truthy return kar diya hain
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}


console.log()
// ***************************Another Example*********************************
const myName = ""         // [] array denge tohh true return karega
if(myName){
    console.log("Yes, dude your name is Diwaker")
} else{
    console.log("Dude it is returning false")
}

// falsy value  : 0, -0, BigInt 0n, "", null, undefined, NaN 
// truthy value : "0", 'false', " ". [], {}, function(){}

// Nullish Coalescing Operator (??) : null undefined 

let val1;
// val1 = 5 ?? 10  // konsi value jaegi val1 main
// val1 = null ?? 10  // isme konsi value assign hogi
val1 = null ?? undefined ?? 10
// isme 2 value isliye dete hain kyuki agar database se value ayegi tohh 1st value hi kuch unexpected type na aa jaye tohh 2nd value assign ho jaegi
console.log(val1)


// *********************Ternary Operator******************************
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(" less than 80") : console.log("more than 80")