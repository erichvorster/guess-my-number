'use strict';



/*
document.querySelector('.message').textContent = 'Correct Number!!!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10
document.querySelector('.guess').value 
*/

const number = Math.trunc(Math.random() * 20 + 1);

let score = 20;




document.querySelector('.check').addEventListener ('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
    // When there is no guess
        document.querySelector('.message'). textContent = 'No Guess ?';
    } else if(guess === number){
    // When guess is correct    
        document.querySelector('.message').textContent = 'Thats correct!!!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '20rem';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = number;
    } else if (guess > number){
    // when guess is too high    
        document.querySelector('.message').textContent = 'Thats too high, guess again!'
        document.querySelector('.score').textContent = score --;
    } else if (guess < number){
    // When guess is too low    
        document.querySelector('.message').textContent = 'Thats too low, guess again!'
        document.querySelector('.score').textContent = score --;
    }})

document.querySelector('.again').addEventListener('click', function(){
    
})