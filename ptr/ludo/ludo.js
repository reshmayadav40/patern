const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const result = document.getElementById('result');
const rollDiceBtn = document.getElementById('rollDiceBtn');
const diceRollSound = document.getElementById('diceRollSound'); // Get the audio element

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(diceElement, diceValue) {
    const diceNames = ['onedice', 'twodice', 'threedice', 'fourdice', 'fivedice', 'sixdice'];
    diceElement.src = `${diceNames[diceValue - 1]}.png`;
}

rollDiceBtn.addEventListener('click', function() {
    diceRollSound.play(); 

    const player1Roll = rollDice();
    const player2Roll = rollDice();

    updateDiceImage(dice1, player1Roll);
    updateDiceImage(dice2, player2Roll);

    score1.textContent = player1Roll;
    score2.textContent = player2Roll;

    if (player1Roll > player2Roll) {
        result.textContent = "🏆 Player 1 Wins!";
    } else if (player1Roll < player2Roll) {
        result.textContent = "🏆 Player 2 Wins!";
    } else {
        result.textContent = "🏆 It's a Draw! 🏆";
    }
});
``
