// Project1
// Have you ever played a game called Rock Paper Scissors? We are going to create that game now.
// You can see a video on how to play Rock paper scissors.

let b=require("readline-sync");

var computerMoves = ['rock', 'paper', 'scissors'];
var computer_choice= computerMoves[Math.floor(Math.random() * computerMoves.length)];

var playerName=b.question("What is your name")
console.log("hi ",playerName )
var player_choice=b.question("Which move you want to do?,'\nrock\npaper\nscissors'");

if (player_choice==computer_choice){
    console.log("Match Draw");
}
else if(player_choice=="rock" && computer_choice=="scissors"){
    console.log(playerName,"you win the game computer choice is",computer_choice);
}
else if(player_choice=="paper" && computer_choice=="scissors"){
    console.log(playerName,"you loss the game computer choice is",computer_choice);
}
else if(player_choice=="scissors" && computer_choice == "paper"){
    console.log(playerName+"you win the game computer choice is",computer_choice);
}
else if(player_choice=="scissors" && computer_choice=="rock"){
    console.log(playerName+"you loss the game computer choice is",computer_choice);
}
else if(player_choice=="paper" && computer_choice == "rock"){
    console.log(playerName+"you win the game computer choice is",computer_choice);
}
else if(player_choice=="paper" && computer_choice=="scissors"){
    console.log(playerName+"you loss the game computer choice is",computer_choice);
}
 


         








