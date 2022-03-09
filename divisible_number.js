// Take user input in a variable named varx.
// Check if this number is divisible by 2.
// Console that number is divisible by 2 or not
// If number is divisible by 2 console 2 se “divisible hai” else “not divisible”
const b=require("readline-sync")
var number=b.questionInt("enter the number");
if (number%2==0){
    console.log(number,"is divisible by 2");
}
else{
    console.log(number,"is not divisible by 2");
}