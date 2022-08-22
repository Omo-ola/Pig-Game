'use strict';
var dices;
let score, roundScores, activePlayer, isGamePlaying, diceScore;
let player1 = document.querySelector(`.player--0`);
let player2 = document.querySelector(`.player--1`);
let current0El = document.getElementById('current--0');
let current0E2 = document.getElementById('current--1');
dices = document.querySelector("img");
let initialize = () => {
    dices.style.display = "none";
    activePlayer = 0;
    roundScores = 0;
    diceScore = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    current0El.textContent = 0;
    current0E2.textContent = 0;
    document.getElementById(`name--0`).textContent = "Player 1"
    document.getElementById(`name--1`).textContent = "Player 2"
    player1.classList.remove("player--active");
    player2.classList.remove("player--active");
    player1.classList.add("player--active");
    player1.classList.remove(`player--winner`);
    player2.classList.remove(`player--winner`);
    isGamePlaying = true;
    activePlayer = 0;
    score = [0, 0];
}
initialize();
const rollClick = () => {
  if (isGamePlaying) {
    let randomValOfDice = Math.trunc(Math.random() * 6) + 1
    dices.style.display = "block"
    randomValOfDice !== 1 ? diceScore += randomValOfDice : player();
    dices.src = `./dice-${randomValOfDice}.png`
    document.querySelector(`#current--${activePlayer}`).textContent = `${diceScore}`;
  }
}
document.querySelector(".btn--roll").addEventListener("click", rollClick);

const clickHold = () => {
  if (isGamePlaying) {
    score[activePlayer] += diceScore;
  document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
  document.querySelector(`#current--${activePlayer}`).textContent = `${diceScore}`;
  console.log(score);
  if (score[activePlayer] >= 20) {
    console.log(activePlayer);
    document.getElementById(`name--${activePlayer}`).textContent = "Winner!!"
    isGamePlaying = false;
    dices.style.display = "none"
  document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
 }
  player();
  }
}
document.querySelector(".btn--hold").addEventListener("click", clickHold);
function player() {
  document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
  diceScore = 0;
  roundScores = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = `${diceScore}`;
  activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
}
document.querySelector(".btn--new").addEventListener("click", initialize);
 