let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let userScore = 0;
let partialResult;
let playerSelection;
const playerInput = document.querySelectorAll("button");
const showResult = document.querySelector(".result");
const scoreboard = document.querySelector(".scoreboard");

playerInput.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText.toLowerCase();
        playRound(playerSelection);
        game();
    });
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        return partialResult = "It's a tie!";
    }
    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return partialResult = "You Lose! Rock beats Scissors";
    }
    if (computerSelection === "rock" && playerSelection === "paper") {
        userScore++;
        return partialResult = "You Win! Paper beats Rock";
    }
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return partialResult = "You Lose! Paper beats Rock";
    }
    if (computerSelection === "paper" && playerSelection === "scissors") {
        userScore++;
        return partialResult = "You Win! Scissors beats Paper";
    }
    if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return partialResult = "You Lose! Scissors beats Paper";
    }
    if (computerSelection === "scissors" && playerSelection === "rock") {
        userScore++;
        return partialResult = "You Win! Rock beats Scissors";
    }
}

function game() {

    if (computerScore < 5 && userScore < 5) {
        showResult.innerText = partialResult;
        return scoreboard.textContent = `Computer: ${computerScore} x Player: ${userScore}`;
    }
    if (computerScore === 5 && userScore < 5) {
        return scoreboard.innerText = `${computerScore} x ${userScore}
         You Lose! Game over.`;
    }
    if (userScore === 5 && computerScore < 5) {
        return scoreboard.innerText = `${computerScore} x ${userScore}
         You are the winner! Game over.`;
    }
}