// map

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10)
const newNums = myNumbers
                                            .map((num) => num*10)
                                            .map( (num) => num + 1)     // iss wale map main upar wala num pas hoga num*10
                                            .filter( (num) => num >= 40)
console.log(newNums)

// chaining ---> means 2-3 method use kar sakte hain

