// Passing Objects in Function

const user = {
    username: "Diwaker",
    price: 199
}

function handleObject(koiBhiObject){
    console.log(`Username is ${koiBhiObject.username} and price is ${koiBhiObject.price}`)
}
handleObject(user)

// or
handleObject({
    username: "Ritesh",
    price: 333
})