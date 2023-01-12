console.clear();

import { explode } from "./explosion.js";

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let coin = document.getElementById("box");
let coinAp = document.getElementById("coin");
let scoreP1 = document.getElementById("scoreP1");
let scoreP2 = document.getElementById("scoreP2");


const randomCoin = () => {
  coin.style.left = Math.floor(Math.random() * 32) * 25 + "px";
  coin.style.top = Math.floor(Math.random() * 32) * 25 + "px";
  if (Math.round(Math.random() * 10) <= 9) {
    coinAp.style.backgroundColor = "purple";
    return;
  }
  coinAp.style.backgroundColor = "orange";
};

player1.style.left = "0px";
player1.style.top = "0px";

player2.style.left = "775px";
player2.style.top = "775px";

coin.style.left = Math.floor(Math.random() * 31) * 25 + "px";
coin.style.top = Math.floor(Math.random() * 31) * 25 + "px";



document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 37:
      // Left arrow key
      if (player1.style.left == "0px") {
        player1.style.left = 775 + "px";
        break;
      }
      player1.style.left = player1.offsetLeft - 25 + "px";
      break;
    case 38:
      // Up arrow key
      if (player1.style.top == "0px") {
        player1.style.top = 775 + "px";
        break;
      }
      player1.style.top = player1.offsetTop - 25 + "px";
      break;
    case 39:
      // Right arrow key
      if (player1.style.left == "775px") {
        player1.style.left = 0 + "px";
        break;
      }
      player1.style.left = player1.offsetLeft + 25 + "px";
      break;
    case 40:
      // Down arrow key
      if (player1.style.top == "775px") {
        player1.style.top = 0 + "px";
        break;
      }
      player1.style.top = player1.offsetTop + 25 + "px";
      break;
    case 65:
      // Left arrow key
      if (player2.style.left == "0px") {
        player2.style.left = 775 + "px";
        break;
      }
      player2.style.left = player2.offsetLeft - 25 + "px";
      break;
    case 87:
      // Up arrow key
      if (player2.style.top == "0px") {
        player2.style.top = 775 + "px";
        break;
      }
      player2.style.top = player2.offsetTop - 25 + "px";
      break;
    case 68:
      // Right arrow key
      if (player2.style.left == "775px") {
        player2.style.left = 0 + "px";
        break;
      }
      player2.style.left = player2.offsetLeft + 25 + "px";
      break;
    case 83:
      // Down arrow key
      if (player2.style.top == "775px") {
        player2.style.top = 0 + "px";
        break;
      }
      player2.style.top = player2.offsetTop + 25 + "px";
      break;
    default:
      console.log("not a arrow");
  }

  if (
    player1.style.left == coin.style.left &&
    player1.style.top == coin.style.top
  ) {
    if (coinAp.style.backgroundColor == "purple") {
      explode(coin);
      scoreP1.innerHTML = +scoreP1.innerHTML + 1;
      return;
    }
    randomCoin();
    scoreP1.innerHTML = +scoreP1.innerHTML + 1;
  }

  if (
    player2.style.left == coin.style.left &&
    player2.style.top == coin.style.top
  ) {
    if (coinAp.style.backgroundColor == "purple") {
      explode(coin);
      scoreP2.innerHTML = +scoreP2.innerHTML + 1;
      return;
    }
    randomCoin();
    scoreP2.innerHTML = +scoreP2.innerHTML + 1;
  }
});
