const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;


function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
  const hole = holes[Math.floor(Math.random() * holes.length)];
  if(hole === lastHole) {
    console.log("Ahhhhhaaaaaa the buds are repeating repeaing more than one repeat !");
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
