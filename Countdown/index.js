const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")
const wrokEl = document.getElementById("wrok")
const breakEl = document.getElementById("break")
let interval;
let timeLeft = 1500; //sec

 let  newEl = true;

function updateTimer (){
    let min = Math.floor(timeLeft/ 60)
    let sec = timeLeft % 60
    timerEl.innerHTML = `${min.toString().padStart(2,"0")} : 
    ${sec.toString().padStart(2,"0")}`
}
function startTimer(){
    clearInterval(timeInter)
    console.log("Start 1st ");
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer()
        if (timeLeft === 0) {
            alert("Continue Your Wrok")
            timeLeft = 1500;
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval)
    clearInterval(timeInter)
    console.log("stop");
}

function resetTimer(){
clearInterval(interval)
clearInterval(timeInter)
timeLeft = 1500
console.log("Reset");
updateTimer()

}


startEl.addEventListener('click', startTimer)
stopEl.addEventListener('click', stopTimer)
resetEl.addEventListener('click', resetTimer)


// new 

let sound = ''

function alarm(){
    sound.onplay()
}


let breakTime = 300;



function startNew(){
    console.log("Click");
}


function breakUpdateTimer(){
    let mins = Math.floor(breakTime/ 60)
    let secs = breakTime % 60
    timerEl.innerHTML = `${mins.toString().padStart(2,"0")} : 
    ${secs.toString().padStart(2,"0")}`
}

let timeInter



// function breakNew(){
//     console.log("Break");
//     timerEl.innerHTML = `05 : 00`
//     clearInterval(interval)
//     breakTime = 10;
//     document.getElementById('start').addEventListener('click',() => {
//         console.log("Break Time");
//         if (breakTime === 0) {
//              alert("Time is Up continue your break");
//              breakTime = 300
//         }else{
//             timeInter = setInterval(() =>{
//                 breakTime--;
//                 breakUpdateTimer()
//                 if (breakTime === 0) {
//                     alert("Time is Up continue your break");
//                     breakTime = 300;
//                 }
//             },1000)
//         }
    
        
//     })
// }


    function startNew(){
        
        console.log("Wrok");
        timerEl.innerHTML = `25 : 00`
        resetTimer()
        // clearInterval(interval)
        // clearInterval(timeInter)
        // timeLeft = 1500
        
        // const test = document.getElementById("start")
        // .addEventListener('click', () =>{
        //     console.log("hi");

        //     interval = setInterval(()=>{
        //         timeLeft--;
        //         updateTimer()
        //         if (timeLeft === 0) {
                    
        //             timeLeft = 1500;
        //         }
        //     },1000)
            
        // })
    }

//  function reset_Time(){
//     switch(newFlag)
//     {
//         case "break_Time":
//             timeLeft = 300;
//             break;
//         case "wrok_time":
//             timeLeft = 1500;
//             break;
//         default:
//             timeLeft = 1500;        
//     }
//     updateTimer()
// }



//     function breakNew(){
//         timerEl.innerHTML = `05 : 00`
//         console.log("Break Hit");
//         newFlag = "break_Time";
//         clearInterval(interval)
        
//         updateTimer()

//     }




















wrokEl.addEventListener('click',startNew)


breakEl.addEventListener('click',()=>{
    timerEl.innerHTML = `05 : 00`
    console.log("Break Hit");
    clearInterval(interval)
    breakTime = 300;
    timeInter = setInterval(()=>{
        breakTime--;
        breakUpdateTimer()
        if (breakTime === 0) {
            alert("Continue Your Wrok")
            breakTime = 300;
        }
    },1000)
})

