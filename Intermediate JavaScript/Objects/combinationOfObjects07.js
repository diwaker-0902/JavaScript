const obj1 = {1: "a", 2: "b"}     // keys are numbers and values are strings
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}


//object.assign()
// const obj3 = Object.assign({}, obj1, obj2)  // {} means empty array do ya na do doesn't matters but {} assures the results
// console.log(obj3)


// but inn sab se better hain ki spread operator ka use karlo
const obj3 = {...obj1, ...obj2}
console.log(obj3)

