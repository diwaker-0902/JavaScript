console.log("hello world")

var a = "hii"
var b = "hello"
var c = 11;

{
    let b = 'this'
    console.log(typeof(b), "&", b)
}
console.log(b)

{
    var b = 'this'
    console.log(typeof(b), "&", b)
}
console.log(b)
console.log(typeof(b), "&", b)

// var is globally scoped while let and const are block scoped
// var can be updated and re-declared within the scope
// let can be updated but not re-declared