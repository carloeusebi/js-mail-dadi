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

    console.log('Player roll: ' + playerRoll);
    console.log('Cpu roll: ' + cpuRoll);

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

    console.log(message);
    console.log('--------------------------')
})




//function to generate rnd numbers
function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

function hideDices() {
    for (let i = 0; i < 6; i++) {
        playerDices[i].style.display = 'none';
        cpuDices[i].style.display = 'none';
    }

    displayResult.innerText = '';

}

function printScores() {
    elementPlayerScore.innerText = playerScore;
    elementCpuScore.innerText = cpuScore;
}