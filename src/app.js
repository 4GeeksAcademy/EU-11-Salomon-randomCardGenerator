/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function restartPage() {
  location.reload();
}

window.onload = function() {
  cardGenerator();
};

function cardGenerator() {
  const suits = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const cardSuiteHeader = document.querySelector(".card-header");
  const cardNumber = document.querySelector(".card-text");
  const cardSuiteFooter = document.querySelector(".card-footer");
  const cardWidthInput = document.getElementById("cardWidth");
  const cardHeightInput = document.getElementById("cardHeight");
  const applyButton = document.getElementById("applyButton");

  applyButton.addEventListener("click", applyChanges);

  function applyChanges() {
    const cardWidth = cardWidthInput.value;
    const cardHeight = cardHeightInput.value;
    const card = document.querySelector(".card");

    if (cardWidth && cardHeight) {
      card.style.maxWidth = `${cardWidth}px`;
      card.style.height = `${cardHeight}px`;
    }
  }

  setInterval(() => {
    location.reload();
  }, 10000);

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  cardSuiteHeader.innerHTML = randomSuit;
  cardNumber.innerHTML = randomNumber;
  cardSuiteFooter.innerHTML = randomSuit;

  if (randomSuit === "♦" || randomSuit === "♥") {
    cardSuiteHeader.classList.add("red");
    cardNumber.classList.add("red");
    cardSuiteFooter.classList.add("red");
  }

  var reloadButton = document.getElementById("reloadButton");

  function handleReload() {
    location.reload();
  }

  reloadButton.addEventListener("click", handleReload);
}
