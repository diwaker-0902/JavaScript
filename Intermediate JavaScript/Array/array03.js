const array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]
const another_array = array.flat(Infinity)
console.log(another_array);

// flat ----> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(Array.isArray("Diwaker"))       // Diwaker array main hain ya nahi
console.log(Array.from("Diwaker"))      //Creates an array from an iterable object.

console.log(Array.from({name: "Diwaker"}))  // returns [] empty becoz it doesn't know that key ka banana hain ya value ka **interview

// .of returns a new array from a set of elements
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))