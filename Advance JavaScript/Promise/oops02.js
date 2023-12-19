// constructor

// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // return this
}

// const userOne = User("Diwaker", 12, true)
// const userTwo = User("Ritesh", 11, false)  //ye overwrite kar dega

// console.log(userOne) // overwrite means hum userOne print karenge tohh bhi userTwo hi print hoga because of overwrite

// So, that's why we use new keyword and the syntax will be like this;
const userOne = new User("Diwaker", 12, true)
const userTwo = new User("Ritesh", 11, false)

console.log(userOne)

// working mechanisms:
// step 1: sabse pehle ek object create hoga
// step 2: constructor function call hoga becoz of new keyword
// new keyword kya karta hain ki jitne bhi arguments, etc hain unko pack karta hain
// step 3: ab jitne bhi arguments, etc likhe hain wo sab this main inject ho jate hain and then we get in function