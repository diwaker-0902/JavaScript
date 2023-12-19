// In JavaScript, objects are king. If you understand objects, you understand JavaScript.

// In JavaScript, almost "everything" is an object.

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
// All JavaScript values, except primitives, are objects.

// objects ko declare karne ke 2 ways 
// 1. like literals
// 2. like constructor  --> koi bhi constructor se jab banate hain tohh singleton object

// object literals 
// it is a way to declare objects

Object.create     // this is the singleton method object creation yahi hota hain constructor method ke through object banana

// const jsUser = {}      this is the object literals object banane ka method
const jsUser = {                 // objects are key-value pairs
    name: "Diwaker",
    "full name": "Diwaker Singh",
    age: 21,
    location: "Jaipur",
    email: "diwakersingh@google.com",               // behind the scene name, age, location aur ye sari keys string hi hain
    isLoggedIn: false
    // lastLoginDays: ["Monday", "Saturday"]
} 

console.log(jsUser.email)
console.log(jsUser["email"])  // inverted ni denge toh error dega and this is the best method to access objects in js
console.log(jsUser["full name"])

