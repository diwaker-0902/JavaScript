class User {
    constructor(username){
        this.username = username
    }

    logMe(){                                                        // is used to set the value
        console.log(`USERNAME is ${this.username}`)
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Diwaker", "diwaker@example.com", 1234)

chai.logMe()
const chrome = new User("Browser")
chrome.logMe()

console.log(chai === chrome)
console.log(chai === Teacher)
console.log(chai instanceof Teacher)
console.log(chai instanceof User)