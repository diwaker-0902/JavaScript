// Problem : Ek symbol lo usko object ki keys main add karo or symbol ko as a key use karna hain 

const mySymbol = Symbol("key1")

const jsUser = {
    location: "Jaipur",
    [mySymbol]: "mykey1"
}

console.log(jsUser.mySymbol)
console.log(typeof jsUser.mySymbol)    // and here type is string & this is the problem & we want symbol. so, square bracket main kar do { } ke andar wale mySymbol ko
//  kyuki abhi hum const wale Symbol("key1") ko refer kar rahe hain
console.log(jsUser[mySymbol])
console.log(typeof jsUser[mySymbol])

// note is that value main koii farq nahi padega but typeof main farq show hoga 