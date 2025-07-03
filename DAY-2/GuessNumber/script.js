
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const resetGame = document.getElementById('resetGame');
const CorrectNumber = document.getElementById('CorrectNumber');
const body = document.querySelector('#body');
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;
let  questionMark= '?';

submitGuess.addEventListener('click', function() {
  const guess = Number(guessInput.value);
    if (!guess) {
        message.textContent = 'Please enter a valid number!';
        scoreDisplay.textContent = score;
    } else if (guess === secretNumber) {
        message.textContent = 'Correct Number!';
        document.querySelector('.title').textContent = 'You Win!';
        document.querySelector('p').style.display = 'none';
        document.querySelector('input').style.display = 'none';
        document.querySelector('button').style.display = 'none';
        CorrectNumber.style.display = 'block';
        CorrectNumber.style.fontSize = '2rem';
        document.querySelector('#CorrectNumber').textContent = secretNumber;
        body.style.backgroundColor = 'green';
        if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
        message.textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
        score--;
        scoreDisplay.textContent = score;
        } else {
        message.textContent = 'You lost the game!';
        scoreDisplay.textContent = 0;
        document.querySelector('.title').textContent = 'Game Over!';
        document.querySelector('p').style.display = 'none';
        guessInput.disabled = true;
        submitGuess.disabled = true;
        submitGuess.style.display = 'none';
        body.style.backgroundColor = 'red';
        CorrectNumber.style.display = 'block';
        CorrectNumber.style.fontSize = '2rem';
        document.querySelector('#CorrectNumber').textContent = secretNumber;
        }
    }
    guessInput.value = '';
}
);

resetGame.addEventListener('click', function() {
    score = 10;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log(secretNumber);
    scoreDisplay.textContent = score;
    message.textContent = 'Start guessing...';
    guessInput.value = '';
    document.querySelector('.title').textContent = 'Guess My Number!';
    document.querySelector('p').style.display = 'block';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('input').style.display = 'inline-block';
    document.querySelector('button').style.display = 'inline-block';
    document.querySelector('#CorrectNumber').textContent =  questionMark;
    document.querySelector('#CorrectNumber').style.color = 'black';
    CorrectNumber.style.display = 'none';
    body.style.backgroundColor = 'black';
    guessInput.disabled = false;
    submitGuess.disabled = false;
}
);


