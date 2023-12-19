// child function can access the parent variable 

function one(){
    const username = "Diwaker"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    two()   
}

one()