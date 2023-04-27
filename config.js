let choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

let computerScore = 0;
let userScore = 0;
let result;
let playerSelection;
const container = document.getElementById("container");
const showResult = document.querySelector(".result");
let playerInput = document.querySelectorAll("button");


playerInput.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText.toLowerCase();
        playRound(playerSelection);
        showResult.textContent = result;
        container.appendChild(showResult);
    });
});

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        return result = "It's a tie!";
    }
    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return result = "You Lose! Rock beats Scissors";
    }
    if (computerSelection === "rock" && playerSelection === "paper") {
        userScore++;
        return result = "You Win! Paper beats Rock";
    }
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return result = "You Lose! Paper beats Rock";
    }
    if (computerSelection === "paper" && playerSelection === "scissors") {
        userScore++;
        return result = "You Win! Scissors beats Paper";
    }
    if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return result = "You Lose! Scissors beats Paper";
    }
    if (computerSelection === "scissors" && playerSelection === "rock") {
        userScore++;
        return result = "You Win! Rock beats Scissors";
    }
}

// function game() {
//     for (let index = 5; index >= 1; index--) {
//         console.log(playRound());
//     }

//     if (computerScore > userScore) {
//         console.log("You Lose!");

//     }
//     else if (computerScore < userScore) {
//         console.log("You are the winner!");
//     }
//     else {
//         console.log("Tie!");
//     }
// }

// game();