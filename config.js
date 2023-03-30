let  choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}


function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper or Scissors?", "").toLowerCase();
    let controlInput = true;

    while (controlInput) { // procurar forma de usar o playerInput como controle
        if (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") { // Aqui posso usar choices para comparar (funcoes arrays)
            playerInput = prompt("Rock, Paper or Scissors?", "").toLowerCase();
        }
        else {
            controlInput = false;
        }
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
    else if (computerSelection === "rock" && playerSelection === "scissors") { // tirar elses
        computerScore++;
        return "You Lose! Rock beats Scissors"; 
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        userScore++;
        return "You Win! Paper beats Rock";
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        userScore++;
        return "You Win! Scissors beats Paper";
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
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
    else {
        console.log("You are the winner!");
    }
}

game();