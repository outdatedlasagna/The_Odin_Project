

function computerPlay() {      
let objects = ["rock", "paper", "scissors"];
return objects[Math.floor(Math.random()*objects.length)];

console.log(objects);
}




function playRound(playerSelection, computerSelection) {
computerSelection = computerPlay();
playerSelection = prompt("Rock! Paper! Scissors!").toLowerCase();


if(playerSelection === computerSelection) {
    return alert("It's a tie!");
    }

else if (playerSelection === "scissors" && computerSelection === "paper") {
    return alert("You win!");
}


else if (playerSelection === "paper" && computerSelection === "rock") {
    return alert("You win!");
    }

else if (playerSelection === "rock" && computerSelection === "scissors") {
    return alert("You win!");
    }

else if (computerSelection === "rock" && playerSelection === "scissors") {
    return alert("You lose!");
    }
    
else if (computerSelection === "scissors" && playerSelection === "paper") {
    return alert("You lose!");
    }
    
else if (computerSelection === "paper" && playerSelection === "rock") {
    return alert("You lose!");
     }
}








// function game() {

//     // Use the previous function inside of this one to play a 5 round game
//     // that keeps score and reports a winner or loser at the end
// }
