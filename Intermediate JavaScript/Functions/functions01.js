// Basic Functions

function sayMyName(){
        console.log("D")    
        console.log("i")
        console.log("w")
        console.log("a")
        console.log("k")
        console.log("e")
        console.log("r")
}

sayMyName             // This is the reference
sayMyName()           // This is the calling of function
console.log()





function additonOfNumbers(num1, num2){            // parameters are passing
    console.log(num1 + num2)
}

additonOfNumbers()          // NaN
additonOfNumbers(4, 7)                           // arguments are passing
additonOfNumbers(5, "1")
additonOfNumbers(4, null)
console.log()

// Another Method to write function
function addNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addNumbers(4, 7)
console.log("Result : ", result)



// one-more function example
function loginUserMessage(username){
        return `${username} just logged in`
}

loginUserMessage()  // ye toh only call hua hain
loginUserMessage("Diwaker Singh")       // isme values pas huii hain but console nahi hua hain
console.log(loginUserMessage("Diwaker Singh"))
console.log(loginUserMessage()) // undefined






