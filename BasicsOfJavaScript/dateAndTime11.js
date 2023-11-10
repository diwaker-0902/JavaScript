// Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString)
console.log(myDate.toLocaleString())
console.log(typeof myDate)              // important for interview

// to declare the specific date
let myCreatedDate = new Date(2023, 0, 23)       // month js main 0 se start hote hain js main
console.log(myCreatedDate.toDateString())

let newCreatedDate = new Date(2023, 0, 23, 5, 4)
console.log(newCreatedDate.toLocaleString())

// also can define in this manner 
// let createdDate = new Date(2023-01-11)
// console.log(createdDate.toLocaleString())

// We have also TimeStamp in the Dates
let myTimeStamp = Date.now()
console.log(myTimeStamp)              // answer will be in the milliseconds
//to convert it into seconds
console.log(Math.floor(Date.now())/1000);
console.log()


console.log(myCreatedDate.getTime())  // answer will be in the milliseconds
console.log()

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getTime)
// console.log(newDate.getFullYear)
// console.log(newDate.getTime)
// console.log(newDate.setHours)
// console.log(newDate.getDay)


// to customize acc. to own choice
console.log("hello")
myDate.toLocaleString('default', {
    weekday: "long"    
                         // ctrl space se options main weekday and long aa ajaenge
})


