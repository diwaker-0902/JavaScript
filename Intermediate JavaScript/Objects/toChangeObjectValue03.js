const jsUser = {
    name: "Diwaker Singh",
    email: "diwakersingh@gmail.com",
    location: "Jaipur",
    isLoggedIn: false
}

// to change the value
jsUser.email = "thewalker@chatgpt.com" // so, this is the way how we can overwrite

// to lock the value, simply we can freeze it
Object.freeze(jsUser)
console.log(jsUser)    // yaha par ab ye freeze ho chuka hain

jsUser.email = "riteshraj@microsoft.com" // email has already been freezed and we are changing but ye error nahi dega
console.log(jsUser)



