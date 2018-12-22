var rndKyle = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + rndKyle + ".png")

var rndJohn = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + rndJohn + ".png")

if (rndKyle === rndJohn) {
  document.querySelector("h1").textContent = "Draw!"
} else if (rndKyle > rndJohn) {
  document.querySelector("h1").textContent = "Player 1 Wins!"
} else if ( rndKyle < rndJohn) {
  document.querySelector("h1").textContent = "Player 2 Wins!"
}
