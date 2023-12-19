const user = {                                // created object user
    username: "Diwaker Singh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from the database")
        console.log(`Username: ${this.username}`)
    
    }
}

console.log(user.username)
console.log(user.getUserDetails())