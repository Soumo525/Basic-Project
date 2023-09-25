const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")
let interval;
let timeLeft = 1500; //sec
function updateTimer (){
    let min = Math.floor(timeLeft/ 60)
    let sec = timeLeft % 60
    timerEl.innerHTML = `${min.toString().padStart(2,"0")} : ${sec.toString().padStart(2,"0")}`
}
function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer()
        if (timeLeft === 0) {
            
            timeLeft = 1500;
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval)
    console.log("stop");
}

function resetTimer(){
clearInterval(interval)
timeLeft = 1500
updateTimer()
}
startEl.addEventListener('click', startTimer)
stopEl.addEventListener('click', stopTimer)
resetEl.addEventListener('click', resetTimer)