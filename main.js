//form
let form = document.querySelector('form')
let Xname = document.getElementById('xName')
let Oname = document.getElementById('oName') 
let main = document.querySelector('.main')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    document.querySelector('.formAns').style.display = 'none'
    main.style.display = 'block'
})

//game
let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')  
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')
let b5 = document.getElementById('b5')
let b6 = document.getElementById('b6')
let b7 = document.getElementById('b7')
let b8 = document.getElementById('b8')
let b9 = document.getElementById('b9')

let clicks = 0;

function bf1() {
    if (b1.innerText === '') {
        if ((clicks += 1) % 2 !== 0) { //clicsk = clicks +1
            b1.innerText = 'X'
        } else {
            b1.innerText = 'O'
        }
        playAgain()
    }
    win()
}
function bf2() {
    if (b2.innerText === '') {
        if ((clicks += 1) % 2 !== 0) {
            b2.innerText = 'X'
        } else {
            b2.innerText = 'O'
        }
        playAgain()
    }
    win()
}
function bf3() {
    if (b3.innerText === '') {
        if ((clicks += 1) % 2 !== 0) {
            b3.innerText = 'X'
        } else {
            b3.innerText = 'O'
        }
        playAgain()
    }
    win()
}
function bf4() {
    if (b4.innerText === '') {
        if ((clicks += 1) % 2 !== 0) {
            b4.innerText = 'X'
        } else {
            b4.innerText = 'O'
        }
        playAgain()
    }
    win()
}
function bf5() {
    if (b5.innerText === '') {
        if ((clicks += 1) % 2 !== 0) {
            b5.innerText = 'X'
        } else {
            b5.innerText = 'O'
        }       
        playAgain()
    }
    win()
}
function bf6() {
    if (b6.innerText === '') {
        if ((clicks += 1) % 2 !== 0) {
            b6
            .innerText = 'X'
        } else {
            b6.innerText = 'O'
        }
        playAgain()
    }
    win()
}
function bf7() {
    if (b7.innerText === '') {
        if ((clicks += 1) % 2 !== 0) {
            b7.innerText = 'X'
        } else {
            b7.innerText = 'O'
        }
        playAgain()
    }
    win()
}
function bf8() {
    if (b8.innerText === '') {
        if ((clicks += 1) % 2 !== 0) {
            b8.innerText = 'X'
        } else {
            b8.innerText = 'O'
        }
        playAgain()
    }
    win()
}
function bf9() {
    if (b9.innerText === '') {
        if ((clicks += 1) % 2 !== 0) {
            b9.innerText = 'X'
        } else {
            b9.innerText = 'O'
        }
        playAgain()
    }
    win()
}
function win() {
           //X
    if (b1.innerText == 'X' && b2.innerText == 'X' && b3.innerText == 'X') {
       winX()
    }

    else if (b3.innerText == 'X' && b6.innerText == 'X' && b9.innerText == 'X') {
        winX()
    }
    
    else if (b7.innerText == 'X' && b8.innerText == 'X' && b9.innerText == 'X') {
        winX()
    }
    
    else if (b1.innerText == 'X' && b4.innerText == 'X' && b7.innerText == 'X') {
        winX()
    }
    
    else if (b1.innerText == 'X' && b5.innerText == 'X' && b9.innerText == 'X') {
        winX()
    }

    else if (b3.innerText == 'X' && b5.innerText == 'X' && b7.innerText == 'X') {
        winX()
    }
    else if (b2.innerText == 'X' && b5.innerText == 'X' && b8.innerText == 'X') {
        winX()
    }
    else if (b4.innerText == 'X' && b5.innerText == 'X' && b6.innerText == 'X') {
        winX()
    }
    //O
    else if (b1.innerText == 'O' && b2.innerText == 'O' && b3.innerText == 'O') {
        winO()
    }

    else if (b3.innerText == 'O' && b6.innerText == 'O' && b9.innerText == 'O') {
        winO()
    }
    
    else if (b7.innerText == 'O' && b8.innerText == 'O' && b9.innerText == 'O') {
        winO()
    }

    else if (b1.innerText == 'O' && b4.innerText == 'O' && b7.innerText == 'O') {
        winO()
    }
    
    else if (b1.innerText == 'O' && b5.innerText == 'O' && b9.innerText == 'O') {
        winO()
    }
    
    else if (b3.innerText == 'O' && b5.innerText == 'O' && b7.innerText == 'O') {
        winO()
    }
    else if (b2.innerText == 'O' && b5.innerText == 'O' && b8.innerText == 'O') {
        winO()
    }
    else if (b4.innerText == 'O' && b5.innerText == 'O' && b6.innerText == 'O') {
        winO()
    }
}

//win X
function winX(){
    alert(Xname.value+' is Win\nPlease Play again\nBETTER LUCK NEXT TIME '+Oname.value)
    location.reload()
}

//win O
function winO(){
    alert(Oname.value+' is Win\nPlease Play again\nBETTER LUCK NEXT TIME '+Xname.value)
    location.reload()
}

function playAgain(){
        if(b1.innerText && b2.innerText && b3.innerText && b4.innerText && b5.innerText && b6.innerText && b7.innerText && b8.innerText && b9.innerText){
            win()
            location.reload();
    }
}