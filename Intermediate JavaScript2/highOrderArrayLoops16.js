// High Order Array Loops
// for in loop
const myObject = {
    js : 'javascript',
    cpp: 'C++',
    ruby: 'ruby',
    swift: 'swift by app'
}
 // in last program the problem was that objects par for of loop nahi lag raha tha 
for (const key in myObject) {
        // console.log(key)
        
        console.log(`${key} shortcut is for ${myObject[key]}`)
        console.log()
}

const programming = ["js", "rb", "py", "java"]

for (const key in programming){
    console.log(programming[key])
}
