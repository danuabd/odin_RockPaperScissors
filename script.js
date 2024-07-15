"use strict";

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const randomNum = Math.trunc(Math.random() * 3 + 1);

  if (randomNum === 1) return "rock";
  if (randomNum === 2) return "paper";
  if (randomNum === 3) return "scissors";
};

const getHumanChoice = function () {
  const userChoice = prompt("Enter your choice:").toLowerCase();

  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors" ||
    userChoice === "scissor"
  )
    return userChoice;
  else return "Invalid Choice";
};

// play game
const playGame = function () {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  const playRound = function (humanChoice, computerChoice) {
    // when draw
    if (humanChoice === computerChoice) {
      console.log("Draw");
      return;
    }

    //   rock vs paper
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You Win! rock beats paper.");
      humanScore++;
    }

    //   paper vs rock
    if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You Lose! rock beats paper.");
      computerScore++;
    }

    //   rock vs scissor
    if (
      humanChoice === "rock" &&
      (computerChoice === "scissor" || computerChoice === "scissors")
    ) {
      console.log("You Win! Rock beats Scissors.");
      humanScore++;
    }

    //   scissor vs rock
    if (
      computerChoice === "rock" &&
      (humanChoice === "scissor" || humanChoice === "scissors")
    ) {
      console.log("You Lose! Rock beats Scissors.");
      computerScore++;
    }

    //   paper vs scissor
    if (
      humanChoice === "paper" &&
      (computerChoice === "scissors" || computerChoice === "scissor")
    ) {
      console.log("You Lose! Scissors beat Paper.");
      computerScore++;
    }

    //   scissor vs paper
    if (
      computerChoice === "paper" &&
      (humanChoice === "scissors" || humanChoice === "scissor")
    ) {
      console.log("You Win! Scissors beat Paper.");
      humanScore++;
    }
  };

  playRound(humanChoice, computerChoice);
};

// call playGame 5 times
playGame();
playGame();
playGame();
playGame();
playGame();
