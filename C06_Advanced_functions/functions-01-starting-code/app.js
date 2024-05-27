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
const PLAYER_WINS = 'I win !!!';
const COMPUTER_WINS = 'Computer wins';
const DRAW = " It's a draw";


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
    console.log(`You chose ${selection}`)
    return selection;
};
// ===================================  PLAYER CHOICE =================================== 


// ===================================  COMPUTER CHOICE =================================== 
const getComputerChoice = function () {
    const randomValue = Math.floor(Math.random() * 3);
    if (randomValue == 1) {
        console.log(`Computer chose ${ROCK}`);
        return ROCK;
    } else if (randomValue == 2) {
        console.log(`Computer chose ${PAPER}`);
        return PAPER;
    } else {
        console.log(`Computer chose ${SCISSORS}`);
        return SCISSORS;
    }
}
// ===================================  COMPUTER CHOICE =================================== 
const getWinner = (computerChoice, playerChoice) =>

    computerChoice === playerChoice
        ? DRAW : (computerChoice === ROCK && playerChoice === PAPER)
            || (computerChoice === PAPER && playerChoice === SCISSORS)
            || (computerChoice === SCISSORS && playerChoice === ROCK) ? PLAYER_WINS : COMPUTER_WINS;

// if (computerChoice === playerChoice) {
//     return DRAW;
// } else if (computerChoice === ROCK && playerChoice === PAPER
//     || computerChoice === PAPER && playerChoice === SCISSORS
//     || computerChoice === SCISSORS && playerChoice === ROCK
// ) {
//     return PLAYER_WINS;
// } else {
//     return COMPUTER_WINS;
// }



startGameBtn.addEventListener('click', function () {  //  <======  function anonymous
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();

    alert(`You chose ${playerSelection} !`);
    const winner = getWinner(computerChoice, playerSelection);
    console.log(`The winner is :${winner}`)
})