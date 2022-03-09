// You have a variable called var num1 with the value as shown:
// var num1 = 300 - 123
// Take one user input and check that number is equal or not.
// If the new user input is equal to num1, console "Equal" else console "Not equal".
let b=require("readline-sync")
const num2=b.questionInt("enter the num2");
var num1 = 300 - 123
if (num1==num2){
    console.log(num2,"is Equal to",num1);
}
else {
    console.log(num2,"is not Equal to",num1);
}
