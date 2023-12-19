// high order array loops

// for of loop

// ["", "", ""]
// [{}, {}, {}]


// for (const iterator of object) {
    
    // }
    
const arr = [1,2,3,4,5]
for (const num of arr) {
        console.log(num)
}

// ************************************Another Example**********************************************

const greetings = "Hello World"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)
}
                                                                                                      
// Maps

const map = new Map()       // Map is a object that holds key-value pairs and remembers the original insertion order of the keys.
map.set('IN', "India")                        // Map main duplicate values nahi hoti hain. Values are unique in the Map's collection.
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);


for(const key of map) {
    console.log(key)
}

for(const [key, value] of map) {
    console.log(key, ':-', value)
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for(const [key, value] of myObject) {
//     console.log(key, ":-", value)
// }                                                 it will not run, because objects are not iterable