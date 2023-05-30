/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function getRandomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  window.addEventListener("load", () => {
    const suits = ["♦", "♥", "♠", "♣"];
    const numbers = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "King",
      "Queen",
      "Jack",
      "Ace"
    ];
    const randomSuit = getRandomElementFromArray(suits);
    const randomNumber = getRandomElementFromArray(numbers);
    const suitElements = document.querySelectorAll(".suit-element");
    suitElements.forEach(e => {
      e.innerHTML = randomSuit;
    });
    const numberElement = document.querySelector(".number-element");
    numberElement.innerHTML = randomNumber;
  });
};
