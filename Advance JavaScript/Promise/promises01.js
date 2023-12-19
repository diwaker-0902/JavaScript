// promises
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// A Promise is of one of these states:
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation was completed successfully.
// 3. rejected: meaning that the operation failed.
// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error).
// A Promise is an object representing the eventual comppletion or failure of an asynchronous operation.

// const promiseOne = new Promise() --> ye bn gaya promise and promise callback leta hain jo ki niche hain(2 part hote hain resolve ya fir reject)

const promiseOne = new Promise(function(resolve, reject){        

    // Do an async task
    // DB calls, cryptography related, network related, etc.
    setTimeout(function(){          // used setTimeout to do a task(simply function console log kar dega)
        console.log('Async task is completed');
        resolve()
    }, 1000)
    
})

// now we will consume this promise
promiseOne.then(function(){                          // then() has directly relation with the resolve
    console.log("Promise consumed");
  
})

// but "Promise consumed" ye jo hain abhi run nahi hua hain
// and run bhi isliye nahi hua hain qki abhi ye link nahi hua hain 
// ye then() and resolve ko link karna padega tabhi ye run hoga 