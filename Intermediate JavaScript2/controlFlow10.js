// switch-case statements

// switch (key){
//     case value:

//         break;

//         default:
//             break;
// }

const month = 3
// const month = "march"                 --> if ye value agar string main hoti tohh

switch (month) {
    case 1:
    // case "january":    
        console.log("January");
        break;
    
    case 2:
        console.log("February")  
        break;
        
    case 3:
        console.log("March")
        break;
        
    case 4:
        console.log("April")  
        break;
        
    default:
        console.log("Default case matched")
        break;    
}