let focusButton = document.getElementById("focus")
let buttons = document.querySelectorAll(".btn")
let shortBreak = document.getElementById("shortbreak")
let longBreak = document.getElementById("longbreak")
let startButton = document.getElementById("btn-start")
let pauseButton = document.getElementById("btn-pause")
let resetButton = document.getElementById("btn-reset")

let time = document.getElementById("time")
let set 
let count = 59
let paused = true
let minCount = 24
time.textContent = `${minCount +1}:00`