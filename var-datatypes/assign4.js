/*                         Type Conversion:
 Convert strings to numbers, numbers to strings, and booleans to strings using Number(), String(), and Boolean() functions. 
 */
 // Conversion: String to Number
 let myScore1 = "5"  //5 is a string now
 myScore1 = Number(myScore1); // 5 became number now
 console.log (typeof(myScore1))

 //Conversion: Number to String
let myScore2 = 5 // 5 is a number now
myScore2 = String(myScore2); // 5 became string now
console.log (typeof(myScore2))

// Conversion : Number --> Boolean
let myScore3 = 45;
myScore3 = Boolean(myScore3)
console.log (typeof(myScore3))

// Conversion : String --> Boolean
let myName = "Chirag"
myName = Boolean(myName)
console.log (typeof(myName))

