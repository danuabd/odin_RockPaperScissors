"use strict";

const getComputerChoice = function () {
  const randomNum = Math.trunc(Math.random() * 3 + 1);

  if (randomNum === 1) return "Rock";
  if (randomNum === 2) return "Paper";
  if (randomNum === 3) return "Scissors";
};

getComputerChoice();
