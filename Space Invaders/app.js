const grid = document.querySelector('.grid')
let currentShooterIndex = 202
let width = 15
let direction =1
let invaderId
for( let i = 0 ; i<255; i++){
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alien = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]
   
function draw(){
    for (let i =0; i< alien.length; i++){
        squares[alien[i]].classList.add('invader')
    }
}

draw()

function remove(){
    for (let i =0; i< alien.length; i++){
        squares[alien[i]].classList.remove('invader')
    }
}

squares[currentShooterIndex].classList.add('shoot')


function moveShooter(e){
    squares[currentShooterIndex].classList.remove('shoot')
    switch(e.key){
        case 'ArrowLeft':
            if (currentShooterIndex % width != 0) {
                currentShooterIndex -=1
                break
            }
            case 'ArrowRight':
                if (currentShooterIndex % width < width -1) {
                    currentShooterIndex +=1
                    break
                }
    }
    squares[currentShooterIndex].classList.add('shoot')
}


document.addEventListener('keydown',moveShooter)


function moveInvaders(){
     const leftEdge = alien[0] % width === 0
     const rightEdge = alien[alien.length - 1] % width === width -1
     remove()
     for (let i =0; i< alien.length; i++){
        alien[i] += direction
    }

     draw()


}

invaderId = setInterval(moveInvaders,500)