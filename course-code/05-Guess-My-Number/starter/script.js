'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const disableGuessInputFieldAndCheckButton = function (status) {
  document.querySelector('.guess').value = '';
  if (status) {
    document.querySelector('.check').setAttribute('disabled', true);
    document.querySelector('.guess').setAttribute('disabled', true);
  } else {
    document.querySelector('.check').removeAttribute('disabled');
    document.querySelector('.guess').removeAttribute('disabled');
  }
};

const setScore = function () {
  document.querySelector('.score').textContent = score;
};

//document.querySelector('.number').textContent = secretNumber;
setScore(score);

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');

  score = 20;
  setScore(score);

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#d955f7';
  document.querySelector('.number').style.width = '15rem';

  disableGuessInputFieldAndCheckButton(false);
});

document.querySelector('.check').addEventListener('click', function () {
  const number = Number(document.querySelector('.guess').value);

  if (secretNumber === number) {
    displayMessage(`🏆 Correct Number!`);

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'rgb(96, 179, 71)';

    disableGuessInputFieldAndCheckButton(true);

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (number > secretNumber) {
    displayMessage(`📈 Too high!`);

    score = --score;

    if (score > 0) {
      setScore(score);
    }
    if (score === 0) {
      setScore(score);
      displayMessage(`🅾️ You lost the game!`);
      disableGuessInputFieldAndCheckButton(true);
      document.querySelector('body').style.backgroundColor = 'black';
    }
  } else if (number < secretNumber) {
    displayMessage(`📉 Too low!`);
    score = --score;
    if (score > 0) {
      setScore(score);
    }
    if (score === 0) {
      setScore(score);
      displayMessage(`🅾️ You lost the game!`);
      disableGuessInputFieldAndCheckButton(true);
      document.querySelector('body').style.backgroundColor = 'black';
    }
  }
});
