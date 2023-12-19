const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "diwaker", email: "diwaker@example.com"})  // resolve main kuch data like array, objects bhi pas kar sakte hain
}, 1000)
})
// now problem is that jo bhi data upar pas kiya hain wo ab niche kaise ayega
promiseThree.then(function(user){           // yaha par hum expect kar skte hain ki kuch data ayega (let object ko user bula rahe hain)
    console.log(user)

})