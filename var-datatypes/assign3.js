/*Boolean Logic:
Define two boolean variables and experiment with &&, ||, and ! operators to understand truthiness */

let isVisted = true
let isSignedUp = true;
let isMembers = false;
let hasPaid = false

console.log (isMembers && isSignedUp)
console.log (isMembers || isSignedUp)
console.log ( !isSignedUp)

console.log (isVisted && isSignedUp)
console.log (isMembers || isSignedUp)
console.log (!isMembers )

console.log (isMembers && hasPaid)
console.log (isMembers || hasPaid)

/*
AND (&&):
True if both conditions are true.
False if any condition is false 

OR (||):
True if at least one condition is true.
False if both are false.

NOT (!):
Inverts a boolean value: true becomes false, and false becomes true
*/



