// Numbers in JavaScript

const score = 400
console.log(score)
console.log(typeof(score))
console.log()

// but here we can also explicitly define as a Number
const balance = new Number(100)
console.log(balance)
console.log(typeof(balance))
console.log()

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))             // important for the e-commerce like website to calculate the precision value
console.log()

const otherNumber = 24.2635658789989
console.log(otherNumber.toPrecision(1))
console.log(otherNumber.toPrecision(2))
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(4))
console.log()

const num = 123.4567
console.log(num.toPrecision(1))
console.log(num.toPrecision(2))
console.log(num.toPrecision(3))
console.log(num.toPrecision(4))
console.log()

const hundred = 1000000
console.log(hundred.toLocaleString())               // isme commas lage hue aa jaega aur default abhi Indian style hain
console.log(hundred.toLocaleString('en-IN'))        // isme Indian style ke according comma lage hue ayenge
console.log()


// ****************************************** Maths in JavaScript ************************************************************

console.log(Math)
console.log(Math.abs(-4))  // -minus ko +plus main convert kar dega
console.log(Math.round(3.66))
console.log(Math.ceil(4.2))   // jara bhi 4 se jyada hua toh 5 kar dega
console.log(Math.floor(4.9))  // floor value hi return karega
console.log(Math.min(4,2,6,8,9,6,3))
console.log(Math.max(4,6,4,2,6,7,8,9,0,2))
console.log()

console.log(Math.random())    // always random value hi return karega but value 0-1 ke bich main hi lie karegi
console.log(Math.random() * 10)  // ab value toh left main shift kar dega ut floor karte hi 0 return karega
console.log(Math.floor(Math.random() * 10 + 1))   // tohh 0 return na kare isliye 1 add kiya. So, ab ye value 0-9 ki range m dega

// but sometimes humko min and max define krna hota hain
min = 10  // (max-min+1) +1 isliye kiya taki 0 case avoid ho jaye
max = 20 // niche 10 ki jagah (max-min+1) se isliye multiply kiya taki hamari range 10 ki jagah min and max k bich m aaye 
console.log(Math.floor(Math.random() * (max-min+1)) + min) // and last main min isliye add kiya taki value defined min se jyada hi aaye