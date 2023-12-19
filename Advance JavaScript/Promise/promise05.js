const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = false
            let error = true
        if (!error) {
            resolve({username: "javascript", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive                  // value .then() ya fir catch() se ayegi
        console.log(response);
    }   catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async await is also like .then()
//thodi der tak wait karta hain kaam ke hone ka and jab kaam ho jata hain tohh hi aage badhta hain warna wahi par error de deta hain 

