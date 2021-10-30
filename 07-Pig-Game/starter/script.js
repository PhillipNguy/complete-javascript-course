'use strict';
let randomNum = () => Math.trunc(Math.random()*6+1)
let total1 = 0;
let total2 = 0;
let roll= 0;
let limit = 50;
let currentPlayer = Math.trunc(Math.random()*1)
let playing = true;



document.querySelector('.btn--roll').addEventListener('click', function() {
    if (playing) {
        roll = randomNum();
        document.querySelector(`#score--${currentPlayer}`).textContent = roll
        document.querySelector('.dice').src=`dice-${roll}.png`;
        if (roll === 1) {
            document.querySelector(`#score--${currentPlayer}`).textContent = 0;
            swap()
        }}
})
document.querySelector('.btn--hold').addEventListener('click', function() {
    if (playing) {
    currentPlayer === 0 ? total1+= roll : total2+=roll;
    document.querySelector(`#current--${currentPlayer}`).textContent = currentPlayer === 0 ? total1 : total2;

    console.log(typeof total1);
    console.log(typeof total2); 

     if (total1 > limit || total2 > limit) {
         document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner')
         playing = false; 
     }


    document.querySelector(`#score--${currentPlayer}`).textContent = 0;
    roll = 0;
    swap();
    }
})

function swap() {
    if (currentPlayer === 0) {
        currentPlayer = 1;
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active')
    } else {
        currentPlayer = 0;
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
    }
}

document.querySelector('.btn--new').addEventListener('click', function() {
    total1 = 0;
    total2 = 0;
    roll = 0; 
    currentPlayer = Math.trunc(Math.random()*1);
    playing = true; 
    
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--1`).classList.remove('player--winner')
})

