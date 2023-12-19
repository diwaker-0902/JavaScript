// this keyword current context ko refer karta hain

const user = {
    username: "diwaker",
    marks: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

user.welcomeMessage()

user.username = "ritesh"
user.welcomeMessage()