const jsUser = {
    name: "Diwaker Singh"
}

jsUser.greetings = function(){
    console.log("Hello, js user")
}
console.log(jsUser.greetings)   // ye function execute nahi hua hain only function ka return type aaya hain
console.log(jsUser.greetings())



jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)   // this is the string interpolation
}
console.log(jsUser.greetingTwo())
