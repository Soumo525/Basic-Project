const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
const score = document.getElementById('score');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

let result = 0;
let hitPositions;
let currentTime = 30;
let moveMoleInterval;
let startTimeout;
let countDownTimerId;
let gameRunning = false; // Flag to track whether the game is running

function initializeGame() {
    result = 0; // Reset the score to 0
    score.innerText = result; // Update the score display
    currentTime = 30; // Reset the time
    timeLeft.innerHTML = currentTime; // Update the time display
}

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPositions = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (gameRunning && square.id === hitPositions) {
            result++;
            score.innerText = result;
            console.log(score.innerText);
            hitPositions = null;
        }
    });
});

function moveMole() {
    randomSquare(); // Call it once immediately to avoid the double-speed issue
    moveMoleInterval = setInterval(randomSquare, 500);
}

function stopMoveMole() {
    clearInterval(moveMoleInterval);
}

function countDown() {
    currentTime--;
    timeLeft.innerHTML = currentTime;
    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        stopMoveMole();
        alert('Game is Over! Your Score is ' + result);
        gameRunning = false; // Reset the gameRunning flag
    }
}

function countDownStart() {
    countDownTimerId = setInterval(countDown, 500);
}

start.addEventListener('click', () => {
    if (gameRunning) {
        // If the game is already running, stop it and start a new one
        stopMoveMole();
        clearInterval(countDownTimerId);
    }

    initializeGame(); // Initialize the game
    console.log('Start the game');
    moveMole();
    countDownStart();
    gameRunning = true; // Set the gameRunning flag to true
});

stop.addEventListener('click', () => {
    console.log('Stop');
    stopMoveMole();
    clearInterval(countDownTimerId);
    gameRunning = false; // Reset the gameRunning flag
});
