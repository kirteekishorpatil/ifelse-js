// Take two numbers as input from the user in variables varx and vary.
// Check whether varx is divisible by vary.
// If yes, console Divisible else console Not Divisible.
const b=require("readline-sync")
var varx=b.question("enter the varx");
var vary=b.question("enter the vary");
if (varx%vary==0){
    console.log(varx,"is divisible by",vary);
}
else {
    console.log(varx,"is not divisible by",vary);
}
