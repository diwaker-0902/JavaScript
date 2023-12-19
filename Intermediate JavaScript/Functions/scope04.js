
let a = 101

if(true){
    let a = 10
    const b = 20
    var c = 40                // or c = 40 main bhi print ho jaega value
console.log("inner a is : ", a)
}
// console.log(a)
// console.log(b)
console.log(c)

console.log(a)
// here a and b will give error but c will print the value and this is the problem with var
