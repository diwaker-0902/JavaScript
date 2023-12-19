const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "diwaker"
}

//This both is the de-structure of object yaha {} ka use karke hi de-structuring ki hain
const {courseInstructor} = course
console.log(courseInstructor)

const {coursename: nameOfCourse} = course
console.log(nameOfCourse)