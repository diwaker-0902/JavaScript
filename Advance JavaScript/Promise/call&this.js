// call--> call hamara execution context kisi aur function ko pas kar deta hain

function SetUserName(username){
    this.username = username
    console.log("called")
}

function createUser(uername, email, password){
    SetUserName.call(this, uername)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "example@js.com", "1234")
console.log(chai)