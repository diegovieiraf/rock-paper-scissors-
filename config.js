let choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}


function getPlayerChoice() {
    let playerInput;

    while (!choices.includes(playerInput)) {

        if (playerInput === null) {
            break;
        }

        playerInput = prompt("Rock, Paper or Scissors?", "").toLowerCase();
    }

    return playerInput;
}

let computerScore = 0;
let userScore = 0;

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    if (computerSelection == playerSelection) {
        return "It's a tie!";
    }
    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    if (computerSelection === "rock" && playerSelection === "paper") {
        userScore++;
        return "You Win! Paper beats Rock";
    }
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    if (computerSelection === "paper" && playerSelection === "scissors") {
        userScore++;
        return "You Win! Scissors beats Paper";
    }
    if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
    if (computerSelection === "scissors" && playerSelection === "rock") {
        userScore++;
        return "You Win! Rock beats Scissors";
    }
}

function game() {
    for (let index = 5; index >= 1; index--) {
        console.log(playRound());
    }

    if (computerScore > userScore) {
        console.log("You Lose!");

    }
    else if (computerScore < userScore) {
        console.log("You are the winner!");
    }
    else {
        console.log("Tie!");
    }
}

game();