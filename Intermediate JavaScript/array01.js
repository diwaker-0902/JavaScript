// ARRAYS

// js arrays are resizable and can contain a mix of different data types

const myArray = [2,3,4,5,6,7]
const myArray2 = new Array(2,3,4,5,6,7)

console.log(myArray[0])
console.log(myArray2[0])
console.log()

// // Array Methods
// myArray.push(11)
// myArray.push(22)
// myArray.pop()
// myArray.unshift(9)      // yha pr value ekdum array ke 0th index par aa jaegi kyuki ye array ki sari values ko shift kr deta hai
// console.log(myArray)
// console.log()

myArray.shift()
console.log(myArray)   // jo value starting index par dali thi unshift ki help se ab wo pop ho jaegi
console.log()

console.log(myArray.includes(99))  // ky 99 hamare array hain ya nahi   -->> false 
console.log(myArray.indexOf(9))
console.log(myArray.indexOf(7))

console.log(myArray)

console.log(typeof(myArray))
console.log(typeof(myArray2))
console.log()

const arr = [9,8,7,6,5,4,3,2,1]
const newArr = arr.join()
console.log(arr)
console.log(newArr)     // now ab ye string bn chuka hain
console.log(typeof newArr)
console.log()
console.log()


// slice, splice

console.log("A ", arr)                       // A is the original array 
console.log()   

console.log("B", arr.slice(1, 3))    // 3 is excluded
console.log()

console.log(arr)    
console.log("C", arr.splice(1, 3))   // 3 is included

console.log(arr)

// NOTE : 
// The main difference between slice & splice is that slice krne ke baad bhi array print karenge toh poori original array ayegi
// but splice main nahi ayegi. jo elements splice kiye hain wo array main nahi ayenge.



