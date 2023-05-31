//function to generate rnd numbers
function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

const playButton = document.getElementById('play-button');
const displayResult = document.getElementById('result-message');

//grab all DOM dices
const playerDices = document.getElementsByClassName('player-dice');
const cpuDices = document.getElementsByClassName('cpu-dice');

playButton.addEventListener('click', function () {

    //hide previous rolls
    for (let i = 0; i < 6; i++) {
        playerDices[i].style.display = 'none';
        cpuDices[i].style.display = 'none';
    }


    // throw dice for player and cpu
    const playerRoll = rollDice();
    const cpuRoll = rollDice();

    console.log('Player roll: ' + playerRoll);
    console.log('Cpu roll: ' + cpuRoll);

    playerDices[playerRoll - 1].style.display = 'block';
    cpuDices[cpuRoll - 1].style.display = 'block';

    let message = 'DRAW!!';

    if (playerRoll > cpuRoll) {

        message = 'Player Wins!!';

    } else if (playerRoll < cpuRoll) {

        message = 'CPU Wins!!';

    }

    displayResult.innerText = message;

    console.log(message);
    console.log('--------------------------')
})