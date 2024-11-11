/*            Random Number Generator:
 Write a function that generates a random number between two values*/

 let randomNumber= function( min, max) {
    return Math.random() * (max - min) + min
 }
yourRandomno = randomNumber(20,30)
 console.log("Random no =", yourRandomno)