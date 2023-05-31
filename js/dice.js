//function to generate rnd numbers
function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

const playButton = document.getElementById('play-button');
const displayResult = document.getElementById('result-message');

playButton.addEventListener('click', function () {
    // throw dice for player and cpu
    const playerDice = rollDice();
    const cpuDice = rollDice();

    console.log('Player roll: ' + playerDice);
    console.log('Cpu roll: ' + cpuDice);
    console.log('--------------------------')
})