// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {     // callback function ka name nahi hota hain
    console.log(val)

});  console.log()           // here ; is important

// or
coding.forEach( (item) => {
    console.log(item)
})

// or
function printMe(item){
    console.log(item)
    
}console.log()

coding.forEach(printMe)

// ********************important************************

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})