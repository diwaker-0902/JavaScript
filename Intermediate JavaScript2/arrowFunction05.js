() => {}        // This is the syntax of arrow function


// arrow funtion ko kisi variable main bhi store kara sakte hain

const addTwo = (num1, num2) => { 
    return num1 + num2
}

console.log(addTwo(3,4))


//one more method is implicit return (in which we do not use parenthesis)
const addition = (num1, num2) => num1 + num2        
// or
                            // const addition = (num1, num2) => (num1 + num2)

console.log(addition(4,7))



// if we want to return object
const name = (num1, num2) => ({username: "diwaker"})

console.log(name())