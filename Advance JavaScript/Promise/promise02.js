// Promise

// in promise01 we created Promise and stored in a variable
// but instead of storing in a variable, we can directly create a new Promise without storing in a variable.

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task")
        resolve()         // to link resolve and .then()
    }, 1000)
}).then(function(){
    console.log("dot then main ek function milta hain")
})
