// ==================================================================================================
// const person = {
//     name: 'Max',               //  <======   this is a propety from a object
//     greet: function greet(){      //  <======   a function stored in a object is called METHOD
//         console.log('Hello Max!')
//     }
// }
// person.greet();
// ==================================================================================================

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const DEFAULT_CHOICE = ROCK;

let gameIsRunning = false;


// ===================================  PLAYER CHOICE =================================== 
const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} and ${SCISSORS} ? `, '').toLocaleLowerCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! by default you chose is ${DEFAULT_CHOICE}!`);
        return DEFAULT_CHOICE;
    }
    return selection;
};
// ===================================  PLAYER CHOICE =================================== 


// ===================================  COMPUTER CHOICE =================================== 
const getComputerChoice = function () {
    const randomValue = Math.floor(Math.random()) * 3;
    if (randomValue == 1) {
        return ROCK;
    } else if (randomValue == 2) {
        return PAPER;
    } else {
        return SCISSORS
    }
    console.log(randomValue)
}
// ===================================  COMPUTER CHOICE =================================== 

startGameBtn.addEventListener('click', function () {  //  <======  function anonymous
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('The Game is starting.....!')
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    alert(`You chose ${playerSelection} !`)
})