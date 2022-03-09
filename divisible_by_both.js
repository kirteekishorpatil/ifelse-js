// Takes a number as user input. Check if this number is divisible by 5 and 15 both
// If it is divisibe by both prints "Divisible by both".
// else prints "Not divisible by both"
const b=require("readline-sync")
var num1=b.questionInt("enter the num1")
if (num1%5==0 && num1%15==0){
    console.log("Divisible by both")
}
else {
    console.log("Not divisible by both")
}