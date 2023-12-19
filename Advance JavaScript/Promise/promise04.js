const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = false
        let error = true
        if (!error) {
            resolve({username: "diwaker", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(() => console.log("Promise ka bhi kuch endpoint hota hain. And ye default hain ye tohh execute hoga hi hoga"))

// in this code we are using chaining concept

// output: this will be output when (let error = false)
//{ username: 'diwaker', password: '1234' }
//diwaker

//output : this will be error when (let error = true)
// ERROR: Something went wrong
