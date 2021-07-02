// import functions and grab DOM elements
import { didUserWin } from './utils.js';

const playButton = document.getElementById('play-button');
const winsSpan = document.getElementById('total-wins');
const lossesSpan = document.getElementById('total-losses');
const drawsSpan = document.getElementById('total-draws');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;


// set event listeners 
playButton.addEventListener('click', () => {
  
    const selected = document.querySelector('input[type=radio]:checked');
    const userChoice = selected.value;
  
    let computerChoice = 'scissors';
    let randomNum = Math.ceil(Math.random() * 3);
    if (randomNum === 1) {
        computerChoice = 'rock';
    } else if (randomNum === 2) {
        computerChoice = 'paper';
    } else if (randomNum === 3) {
        computerChoice = 'scissors';
    }
    console.log(computerChoice);






    

    // let computerChoice = 'rock';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
