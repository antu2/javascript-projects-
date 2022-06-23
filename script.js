"use strict";

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    console.log(
      (document.querySelector(".message").textContent = "No Number!")
    );
  } else if (guess === number) {
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    console.log(
      (document.querySelector(".message").textContent = "Correct Number")
    );
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > number) {
    if (score > 1) {
      console.log(
        (document.querySelector(".message").textContent = "Too High")
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      console.log(
        (document.querySelector(".message").textContent = "You Loss")
      );
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      console.log((document.querySelector(".message").textContent = "Too Low"));
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      console.log(
        (document.querySelector(".message").textContent = "You Loss")
      );
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
});
