'use strict';
// State variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let scoreValue = 20;
let highscore = 0;
const inputSelector = document.querySelector('.guess');
const message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.high-score');
// Button Elements
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');

const checkInputValue = inputValue => {
  // When there is no input
  if (!inputValue) {
    message.textContent = '⛔ No Number';
  }
  // When input matches with secretNumber
  else if (inputValue === secretNumber) {
    // Manipulating Content
    message.textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = inputValue;
    // Manipulating styles
    document.querySelector('.number').style.width = '30rem';
    document.body.style.backgroundColor = '#60b347';
    checkButton.style.pointerEvents = 'none';
    inputSelector.style.pointerEvents = 'none';
    // Manipulating HighScore
    if (scoreValue > highscore) {
      highscore = scoreValue;
      highScore.textContent = highscore;
    }
  }
  // When input is too high... or too low
  else {
    if (scoreValue > 1) {
      scoreValue--;
      message.textContent =
        inputValue > secretNumber ? '📉 Too High...' : '📈 Too Low';
      score.textContent = scoreValue;
    } else {
      message.textContent = '🥵 You lost the game';
      score.textContent = 0;
    }
    // When input is too low
  }
};

const againHandler = () => {
  // Implementing Starting content
  secretNumber = Math.floor(Math.random() * 20) + 1;
  scoreValue = 20;
  document.querySelector('.number').textContent = '?';
  score.textContent = 20;
  message.textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  // Implementing starting styles
  document.querySelector('.number').style.width = '15rem';
  checkButton.style.pointerEvents = 'all';
  inputSelector.style.pointerEvents = 'all';
};

checkButton.addEventListener('click', function () {
  const inputValue = +inputSelector.value;

  if ((inputValue >= 1 && inputValue <= 20) || inputValue == '') {
    checkInputValue(inputValue);
  } else {
    message.textContent = 'Guess a valid number';
  }
});

againButton.addEventListener('click', againHandler);
