let coin = document.getElementById("box");
let coinAp = document.getElementById("coin");

let isExploding = false;

const randomCoin = () => {
  coin.style.left = Math.floor(Math.random() * 32) * 25 + "px";
  coin.style.top = Math.floor(Math.random() * 32) * 25 + "px";
  if (Math.round(Math.random() * 10) <= 9) {
    coinAp.style.backgroundColor = "purple";
    return;
  }
  coinAp.style.backgroundColor = "orange";
};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export function explode() {
  if (!isExploding) {
    if (coin.style.top == "775px" || coin.style.top == "0px") {
      coin.style.height = 50 + "px";
    } else {
      coin.style.height = 75 + "px";
      coin.style.top = coin.offsetTop - 25 + "px";
    }
    if (coin.style.left == "775px" || coin.style.left == "0px") {
      coin.style.width = 50 + "px";
    } else {
      coin.style.width = 75 + "px";
      coin.style.left = coin.offsetLeft - 25 + "px";
    }
    coinAp.style.display = "none";
    coin.style.backgroundColor = "green";
    coin.style.opacity = 50 + "%";

    isExploding = true;
    setTimeout(myTimer, 3000);
  }
}

function myTimer() {
  isExploding = false;
  coinAp.style.display = "block";
  coin.style.width = 25 + "px";
  coin.style.height = 25 + "px";
  coin.style.backgroundColor = "transparent";
  coin.style.opacity = 100 + "%";
  coin.style.top = coin.offsetTop + 25 + "px";
  coin.style.left = coin.offsetLeft + 25 + "px";
  randomCoin();
}
