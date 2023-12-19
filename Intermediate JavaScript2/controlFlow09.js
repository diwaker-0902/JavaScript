// if else

const balance = 1000

if(balance < 500){
    console.log("less than 500")
} else if(balance < 750){
    console.log("less than 750")
} else if(balance < 900){
    console.log("less than 750")
} 
else {
    console.log("Ab print kar do yaar, less than 1200 hain")
}



// in real-time example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){                 // && main dono check karega
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle || guestuser){
    console.log("User logged in")
}