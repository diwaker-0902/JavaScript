// const tinderUser1 = new Object() // This is the singleton object
// const tinderUser2 = {}  // This is the non-singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Diwaker Singh"
tinderUser.isLoggedIn = false

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))   // ye btata hain ki value exist karti hain ya nahi
console.log(tinderUser.hasOwnProperty('isLoggedOut'))