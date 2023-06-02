const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const displayResult = document.getElementById('result-message');

// score variables
const elementPlayerScore = document.getElementById('player-score');
const elementCpuScore = document.getElementById('cpu-score');

let playerScore = 0;
let cpuScore = 0;

//grab all DOM dices
const playerDices = document.getElementsByClassName('player-dice');
const cpuDices = document.getElementsByClassName('cpu-dice');


// RESET BUTTON
resetButton.addEventListener('click', function () {
    
    //hide previous rolls
    hideDices();
    displayResult.innerText = '';

    playerScore = cpuScore = 0;

    printScores();

})


// PLAY BUTTON
playButton.addEventListener('click', function () {

    //hide previous rolls
    hideDices();

    // throw dice for player and cpu
    const playerRoll = rollDice();
    const cpuRoll = rollDice();

    // show dices on screen
    playerDices[playerRoll - 1].style.display = 'block';
    cpuDices[cpuRoll - 1].style.display = 'block';

    //comparison

    let message = 'DRAW!!';

    if (playerRoll > cpuRoll) {

        message = 'Player Wins!!';
        playerScore++;

    } else if (playerRoll < cpuRoll) {

        message = 'CPU Wins!!';
        cpuScore++;

    }

    //result outputs
    displayResult.innerText = message;

    printScores();
})

/**
 * returns a random number between 1 and 6, representing a dice roll
 * @returns {number} a random numbert between 1 and 6
 */
function rollDice() {

    return Math.floor(Math.random() * 6 + 1);
}

/**
 * hides every dice on screen
 */

function hideDices() {

    for (let i = 0; i < 6; i++) {

        playerDices[i].style.display = 'none';
        cpuDices[i].style.display = 'none';
    }
}

/**
 * updates player and cpu scores on screen
 */

function printScores() {

    elementPlayerScore.innerText = playerScore;
    elementCpuScore.innerText = cpuScore;
}