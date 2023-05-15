//variables from the html document
let game = document.querySelector('#game');
let dog = document.querySelector('.js-dog');
let rock = document.querySelector('.js-rock');
let score = document.querySelector('.js-score');
let gameOver = document.querySelector('.js-gameOver');
let start = document.querySelector('.js-start');

gameOver.style.display = 'none';

//interval for score
let interval = null;
let playerScore = 0;

let scoreCount = function() {
  playerScore++;
  score.innerHTML = `Score: ${playerScore}`
}

let isPlaying = false;


//listener for spaceBar
window.addEventListener('keydown', function(start) {
  if (start.key === ' ') {
    if (!isPlaying) {
      startGame();
      isPlaying = true;
    }
    else {
      jump();
    }
  }
});

let rockInterval = null;

//Start game
function startGame() {
  interval = setInterval(scoreCount, 100); 
  start.style.display = 'none';
  
  rockInterval = setInterval(startRocks, 100);
  
}

//make the dog jump
function jump() {
  if (dog.classList != 'dogActive') {
    dog.classList.add('dogActive');
    setTimeout(function() {
      dog.classList.remove('dogActive');
    }, 550);
  }
}


//calculate a random number to the rocks to appear
function randomTime() {
  let min = 1000; //min and max time between rocks
  let max = 3000;
  let rand = Math.random();
  rand = Math.floor(rand * (max-min));
  rand += min;
  console.log(rand);
  return rand;
}


//make the rocks to start appearing
let startRocks = function() {
  if (rock.classList != 'rockActive') {
    rock.classList.add('rockActive');
    setTimeout(function() {
      rock.classList.remove('rockActive');
    }, 1000);
  }
}

 