var rndPlayer1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + rndPlayer1 + ".png")

var rndPlayer2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + rndPlayer2 + ".png")

if (rndPlayer1 === rndPlayer2) {
  document.querySelector("h1").textContent = "Draw!"
} else if (rndPlayer1 > rndPlayer2) {
  document.querySelector("h1").textContent = "Player 1 Wins!"
} else if (rndPlayer1 < rndPlayer2) {
  document.querySelector("h1").textContent = "Player 2 Wins!"
}
