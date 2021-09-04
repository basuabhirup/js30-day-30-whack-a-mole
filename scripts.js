const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole = "";
let timeUp = false;
let score = 0;


function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
  const hole = holes[Math.floor(Math.random() * holes.length)];
  if(hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 800);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up')
    if(!timeUp) peep();
  }, time);
}

function addScore(e) {
  if(!e.isTrusted) return; //to prevent chating
  score++;
  scoreBoard.textContent = score;
  let whackSound = new Audio("./whack_sound.mp3");
  whackSound.play();
}

function startGame() {
  scoreBoard.textContent = 0;
  score = 0;
  timeUp = false;
  peep();
  moles.forEach(mole => mole.addEventListener('click', addScore))
  setTimeout(() => timeUp = true, 10000);
}
