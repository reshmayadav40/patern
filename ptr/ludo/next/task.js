
let currentPlayer = 1;
let dice = document.getElementById('dice'); 
let playerTurnText = document.getElementById('playerTurn');

let playerPositions = {
    1: 0, 
    2: 0  
};

const totalCells = 52; 


dice.addEventListener('click', function() {
    let diceRoll = Math.floor(Math.random() * 6) + 1; 
    dice.textContent = diceRoll; 

 
    alert('Player ' + currentPlayer + ' rolled a ' + diceRoll);

  
    moveGoti(currentPlayer, diceRoll);

 
    if (currentPlayer === 1) {
        currentPlayer = 2;
        playerTurnText.textContent = "Player 2's turn"; // Update player turn text
    } else {
        currentPlayer = 1;
        playerTurnText.textContent = "Player 1's turn"; // Update player turn text
    }
});

function moveGoti(player, diceRoll) {
   
    let currentPos = playerPositions[player];

  
    let newPos = currentPos + diceRoll;

    
    if (newPos > totalCells) {
        newPos = newPos % totalCells;
    }

    
    playerPositions[player] = newPos;

    console.log('Player ' + player + ' moved to position ' + newPos);
}

