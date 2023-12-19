// learn after newKeyword

const User = {
    name: "diwaker",
    email: "diwaker@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport      // This is the old syntax
}

Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)     // means TeachingSupport ki sari property Teacher inherit kar lega

let anotherUsername = "thewalker      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"diwaker                                               ".trueLength()
"ritesh".trueLength()