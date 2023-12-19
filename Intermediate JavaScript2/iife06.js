// Immediately Invoked Function Expressions (IIFE)



function chai(){              // This is a named IIFE
    console.log(`DB CONNECTED`)
}
chai();    // here ; is important because iife ko pata nahi hain ki kaha par khatam karna hain context ko so we use ;

// ****************************************************************************************

(function one(){
        console.log(`DB CONNECTED`)
})();
// here there are two parenthesis ()()
// first parenthesis is for function definition and second one is for execution call



// ***************************************Definition of IIFE for placements***************
// jo function immediately execute ho jaye is IIFE
// Global Scope ke pollution se problem hoti hain kayi baar, tohh uss global scope ke pollution ya declarations 
// ko hatane ke liye hum IIFE ka use karte hain




// or

( () => {
    console.log(`DB CONNECTED TWO`);
}) ();                // ; is important otherwise face problems


// or
( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
}) ('diwaker')
