// here memory is of 2 types
// Stack memory(used by primitive) and Heap memory(used by non-primitive)

// Stack memory use ki hain means value ka copy milta hain
// Heap memory main value ka reference mailta hain

// Stack
let myYoutubeName = "Diwaker Singh"
let anotherName = myYoutubeName;
anotherName = "TheWalker";

console.log(myYoutubeName);
console.log(anotherName);


// Heap
let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

// heap ke andar value ko point karte hain
let userTwo = userOne
userTwo.email = "diwakersingh@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

