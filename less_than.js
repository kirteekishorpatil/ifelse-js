// You have a variable called number with the value as shown:
// var number1 = 44 * 30
// Check if this number1 is greater than or equal to number2. 
// If the entered number2 is greater than or equal to number1, 
// console "number2 is greater than or equal" else console "number2 is lesser".
const b=require("readline-sync")
let number2=b.question("enter the number2");
var number1 = 44 * 30
if (number2>=number1 ){
    console.log(number2,"is greater than or equal to",number1);
}
else{
    console.log(number2,"is lesser to",number1);
}
