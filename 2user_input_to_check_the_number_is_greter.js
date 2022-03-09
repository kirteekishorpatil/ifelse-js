// Take two numbers as input from the user. Console the number which is greater.
const b=require("readline-sync")
let num1=b.question("enter the num1");
var num2=b.question("enter the num2");
if (num1>num2){
    console.log(num1,"num1 is greter");
}
else{
    console.log(num2," num2 is greter");
}
