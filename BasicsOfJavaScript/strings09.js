// Modern syntax of Strings in JavaScript

const name = "Diwaker Singh"
const repoCount = 51

// console.log(name + repocount + "This is outdated and not good")

// in modern string syntax we uses backtiks becoz yaha aata hain string interpolation
// and yaha banate hain placeholders and variables ko directly inject karte hain
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


// Another Method to declare Strings
const goodName = new String('The-Walker')
console.log(goodName)
console.log(typeof goodName)

console.log(goodName[0])
console.log(goodName[1])
console.log(goodName[2])
console.log(goodName[3])
console.log(goodName[4])
console.log(goodName[5])
console.log(goodName.__proto__)
console.log(goodName.length)
console.log(goodName.toLowerCase())
console.log(goodName.toUpperCase())
console.log(goodName.charAt(0))
console.log(goodName.indexOf('k'))
console.log(goodName.substring(0, 4))       // 4 is excluded
console.log(goodName.slice(2, 5))
console.log(goodName.split('-'))

const naam = "    Diwaker    "
console.log(name.trim())

const url = "https://diwakersingh.com/diwaker%21singh"
console.log(url.replace('%21', '--'))   // ab %21 replace ho chuka hain -- se

// Asking que that the provided string is present or not
console.log(url.includes('diwaker'))
console.log(url.includes('java'))




