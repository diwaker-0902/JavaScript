// console.log(Math.PI)
// here we are overwriting the value of pie, but it will not get overwrite
// Math.PI = 11
// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // poore math module main se humko pie ka value chahiye & stored in the descriptor
console.log(descriptor)

// Output:
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/
console.log()

const city = {
    name: 'jaipur',
    pinCode: 302028,
    isAvailable: true
}

// making a new object
console.log(city)

console.log(Object.getOwnPropertyDescriptor(city, "name"));   // city is an object and property ka descriptor means name, pinCode, isAvailable are properties
console.log(Object.getOwnPropertyDescriptor(city, "pinCode"))
console.log(Object.getOwnPropertyDescriptor(city, "isAvailable"))


// Setting property value according to ourself
Object.defineProperty(city, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(city, "name")); // output of this line is written below
/*
{
  value: 'jaipur',
  writable: false,
  enumerable: false,
  configurable: true
}
*/