// code the change like if I give number as 21, 
// 21 is divisible by both 3 and 7 so it should give Chacolate as answer to me.
let b=require("readline-sync")
var number=b.question("enter the numbre");
if(number%3==0){
    console.log("choco")
}
if (number%7==0){
    console.log("late")
}
if (number%3==0 && number%7==0) {
    console.log("Chocolate")
}
else {
    console.log("Not divisible by 3 , 7")
}