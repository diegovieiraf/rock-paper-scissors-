let choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

let computerScore = 0;
let userScore = 0;
let partialResult;
let finalResult;
let playerSelection;
const container = document.getElementById("container");
const playerInput = document.querySelectorAll("button");
const showResult = document.querySelector(".result");
const scoreboard = document.querySelector(".scoreboard");


playerInput.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText.toLowerCase();
        playRound(playerSelection);
        showResult.textContent = partialResult;
        container.appendChild(showResult);
        game();
    });
});

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
        scoreboard.textContent = `Computer: ${computerScore} x Player: ${userScore}`;
    }
    else if (computerScore === 5) {
        scoreboard.textContent = `${computerScore} x ${userScore}\n You Lose!`;
        container.appendChild(scoreboard);
    }
    else if (userScore === 5) {
        scoreboard.textContent = `${computerScore} x ${userScore}\n You are the winner!`;
        container.appendChild(scoreboard);
    }
}