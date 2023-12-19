// first learn promise before learn this

// fetch() global function
// The global fetch() method starts the process of fetching a resource form the network, returning a promise which is fulfilled 
// once the response is available.

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))