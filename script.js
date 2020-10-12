import {startConfetti, stopConfetti, removeConfetti} from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEL = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEL = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScoreNr=0;
let computerScoreNr=0;

// reset all selected icons
function resetSelected(){
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

//Reset ALL GAME score & choice of player and computer
function resetAll() {
  playerScoreNr=0;
  computerScoreNr=0;
  playerScoreEl.textContent = playerScoreNr;
  computerScoreEl.textContent = computerScoreNr;
  playerChoiceEL.textContent = '';
  computerChoiceEL.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;

function computerRandomChoice() {
  const computerChoiceNr = Math.random();
  if(computerChoiceNr < 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNr <= 0.4) {
    computerChoice = 'paper';
  } else if (computerChoiceNr <= 0.6) {
    computerChoice = 'scissors';
  } else if (computerChoiceNr <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

// Update Score
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultText.textContent = "You Won!"
      playerScoreNr++;
      playerScoreEl.textContent = playerScoreNr;
    } else {
      resultText.textContent = "You Lost!  &#128549";
      computerScoreNr++;
      computerScoreEl.textContent = computerScoreNr;
    }
  }
}

// Call funcs to process trunf 
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}


function displayComputerChoice() {
  //checkResult();
  switch(computerChoice) {
    case 'rock' :
      computerRock.classList.add('selected');
      computerChoiceEL.textContent = ' --- Rock';
      break;
    case 'scissors' :
      computerScissors.classList.add('selected');
      computerChoiceEL.textContent = ' --- Scissors';
      break;
    case 'paper' :
      computerPaper.classList.add('selected');
      computerChoiceEL.textContent = ' --- Paper';
      break;
    case 'lizard' :
      computerLizard.classList.add('selected');
      computerChoiceEL.textContent = ' --- Lizard';
      break;
    case 'spock' :
      computerSpock.classList.add('selected');
      computerChoiceEL.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

// Passin player selection value and style icons
function select(playerChoice) {
  checkResult(playerChoice);
  // add selected styleing & playerChoice
  switch(playerChoice) {
    case 'rock' :
      playerRock.classList.add('selected');
      playerChoiceEL.textContent = ' --- Rock';
      break;
    case 'scissors' :
      playerScissors.classList.add('selected');
      playerChoiceEL.textContent = ' --- Scissors';
      break;
    case 'paper' :
      playerPaper.classList.add('selected');
      playerChoiceEL.textContent = ' --- Paper';
      break;
    case 'lizard' :
      playerLizard.classList.add('selected');
      playerChoiceEL.textContent = ' --- Lizard';
      break;
    case 'spock' :
      playerSpock.classList.add('selected');
      playerChoiceEL.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}
window.select = select;

// On the begining initialize values
resetAll();