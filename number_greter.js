// If this number is less than 10 then print "number is less than 10". 
// If it is greater than 10 and less than 20 then print "number is less than 20". 
// Else if it is greater than 20 then print "greater than 20".
let b=require("readline-sync")
var num1=b.question("enter the num1")
if (num1<10){
    console.log(num1,"is less than",10)
}
else if (num1>10 && num1<20){
    console.log(num1,"is less than",20)
}
else{
    console.log("greter then",20)
}