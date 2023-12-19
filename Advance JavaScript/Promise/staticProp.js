// Static Properties

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const diwaker = new User("diwaker")
// console.log(diwaker.createId())

// static inheritancd ko bhi stop kar deat hain and kisi bhi child ko bhi access nahi karne deta hain 
// and kisi bhi class ko bhi inherit nahi karne deta hain
