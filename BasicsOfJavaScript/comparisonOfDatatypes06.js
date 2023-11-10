// console.log("2" > 1)

console.log(null > 0)    
console.log(null == 0)   
console.log(null >= 0)   

// The reason is that an equality check == and comparison <> < > = =< work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3rd point) null >= 0 is true and (1st point) null > 0 is false

console.log()
console.log(undefined)
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
console.log(undefined <= 0)

// strict check ---> strict check means it checks stricts along with the datatype also
console.log("2" === 2)



