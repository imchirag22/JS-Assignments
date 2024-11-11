/*                      Tip Calculator:
 Create a function to calculate a tip based on a bill amount and percentage.*/

 function Tip(billAmount,tipPercentage) {
    return  billAmount * (tipPercentage / 100)
 }

 let yourTip = Tip(1000,10)
 console.log("Your Tip is :", yourTip)