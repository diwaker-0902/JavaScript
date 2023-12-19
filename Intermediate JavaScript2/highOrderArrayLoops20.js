// reduce

// The reduce() method executes a user-supplied "reduce" callback function on each element of the array.
// In order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across alll elements of the array is a single value

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0)  // accumulator main initial value pas krni hoti hai & yha pr humne 0 pas kiya hai fir jo value return hogi wo value aa jaegi accumulator main

// or

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal)