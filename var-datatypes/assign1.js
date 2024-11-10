/* Create and Assign Variables:
 Define variables for a user's name, age, and whether they are a member, then display them in a single string sentence. */

let userNamee = "Chirag";
let agee = 19;
let memberr = true;

console.log("User Details are :", userNamee,agee,memberr ) // added extra letters so that earlier code also works

//Improved V- of the assignment

let userName = "Chirag";
let age = 19;
let member = true;

console.log(`User Details are :, Name - ${userName}, Age - ${age}, Member State - ${member}`)

// Things to Remember
// --> Use template strings (`) for clearer and more readable concatenation and to avoid multiple writing "" in console
// --> Clearly label outputs in console.log to make the output more understandable. This can be helpful as your applications grow in complexity.