let computer_score = 0;
let player_score = 0;

let computer_points;
let player_points;


function computerPlay() {      
let objects = ["rock", "paper", "scissors"];
return objects[Math.floor(Math.random()*objects.length)];

console.log(objects);
}


function playRound(playerSelection, computerSelection) {
computerSelection = computerPlay();
playerSelection = prompt("Rock! Paper! Scissors!").toLowerCase();


if(playerSelection === computerSelection) {
    player_points = ++player_score;
    computer_points = ++computer_points;
    return alert("It's a tie!");
    }

else if (playerSelection === "scissors" && computerSelection === "paper") {
    player_points = ++player_score;
    return alert("You win! Scissors beats paper!");
}


else if (playerSelection === "paper" && computerSelection === "rock") {
    player_points = ++player_score;
    return alert("You win! Paper beats rock!");
    }

else if (playerSelection === "rock" && computerSelection === "scissors") {
    player_points = ++player_score;
    return alert("You win! Rock beats scissors");
    }

else if (computerSelection === "rock" && playerSelection === "scissors") {
    computer_points = ++computer_points;
    return alert("You lose! Rock beats scissors");
    }
    
else if (computerSelection === "scissors" && playerSelection === "paper") {
    computer_points = ++computer_points;
    return alert("You lose! Scissors beat paper");
    }
    
else if (computerSelection === "paper" && playerSelection === "rock") {
    computer_points = ++computer_points;
    return alert("You lose! Paper beats rock");
     }

return(playRound(playerSelection, computerSelection));

}


function game() {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();


    if (computer_score == player_score) {
        return alert("The game is a tie");
    }

    else if (player_score < computer_score) {
        return alert("You've been beaten by a computer");
    }

    else if (player_score > computer_score) {
        return alert("You are the winner");
    }

}
