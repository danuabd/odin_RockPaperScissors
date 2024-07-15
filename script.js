"use strict";

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const randomNum = Math.trunc(Math.random() * 3 + 1);

  if (randomNum === 1) return "Rock";
  if (randomNum === 2) return "Paper";
  if (randomNum === 3) return "Scissors";
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

const playRound = function (humanChoice, computerChoice) {};
