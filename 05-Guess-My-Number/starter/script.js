'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 55;
// document.querySelector('.score').textContent = 14;

// document.querySelector('.guess').value = 41;
// console.log(document.querySelector('.guess').value);
let defaultLives = 20;
let lives = defaultLives;
let highscore = 0;
let maxNum = 100;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayScore = () =>
  (document.querySelector('.score').textContent = lives);
const randNum = max => Math.trunc(Math.random() * max) + 1;

displayScore();
let number = randNum(maxNum);
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (lives !== 0) {
    if (!guess) {
      displayMessage('No Number!');
    } else if (guess === number) {
      displayMessage('Correct Number!');
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (highscore < lives) {
        highscore = lives;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== number) {
      if (lives === 1) {
        displayMessage('You Lose!');
        lives--;
        document.querySelector('.score').textContent = lives;
      } else {
        lives--;
        document.querySelector('.score').textContent = lives;
        displayMessage(guess < number ? 'Too Low!' : 'Too High!');
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = randNum(maxNum);
  lives = defaultLives;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start Guessing...');
  displayScore();
  document.querySelector('.number').style.width = '15rem';
  console.log(number);
});
