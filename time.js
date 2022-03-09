// Please tell output on different value of time variable :
var b= require("readline-sync")
var time=b.questionInt("enter the number do you want")
if (time >= 5 && time <= 6) {
    console.log("sleep😴well");
}
else if (time >= 6 && time <= 7) {
    console.log("Morning Exercise");
}
else if(time > 7 && time < 8.30){
    console.log("😋Breakfast");
}
else if ( time > 8.30 && time < 12){
    console.log("🖥️Study");
}