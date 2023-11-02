const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score')
const start = document.getElementById('start')
const stop = document.getElementById('stop')

let result = 0
let hitPostions
let currentTime = 30
function randomeSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    
    let randomeSquare = squares[Math.floor(Math.random()*9)]
    randomeSquare.classList.add('mole')
    hitPostions = randomeSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if(square.id === hitPostions){
            result++
            score.innerText = result
            console.log(score.innerText);
            hitPostions = null
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomeSquare,500)
}

//moveMole()

let countDownTimerId
function countDown(){
currentTime--
timeLeft.innerHTML = currentTime
if(currentTime === 0 ){
    clearInterval(countDownTimerId)
    alert('Game is Over ! Your Score is ' +result)
}
}

function countDownStart(){
    countDownTimerId = setInterval(countDown,500)
}




start.addEventListener('click',() => {
    setTimeout(() => {
        console.log("Start the game");
        moveMole()
        countDownStart()
    },2000)
  
})