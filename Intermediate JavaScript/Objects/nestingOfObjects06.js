// Nesting of Objects

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Diwaker",
            lastname: "Singh"
        }
    }
}

console.log(regularUser)
console.log()
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname?.userfullname.firstname)  // let suppose fullname exist kar raha hain ya nahi tohh hum question mark ka use karenge