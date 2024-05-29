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
const getPlayerChoice = () => {
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
const getComputerChoice = () => {
    const randomValue = Math.floor(Math.random() * 3);
    if (randomValue == 1) {
        return ROCK;
    } else if (randomValue == 2) {
        return PAPER;
    } else {
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



startGameBtn.addEventListener('click', () => {  //  <======  function anonymous
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You chose ${playerChoice} and computer chose ${computerChoice}! Result of game: You `;
    if (winner === DRAW) {
        message = message + 'have draw';
    } else if (winner === PLAYER_WINS){
        message = message + 'Win !';
    } else {
        message = message + 'Lost !';
    }
    alert(message);
    gameIsRunning = false;

})