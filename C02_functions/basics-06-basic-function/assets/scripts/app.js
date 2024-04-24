const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value)
}


function add() {
    const enteredNumber = getUserInput()
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber; // parseInt - convert string to a number 
    outputResult(currentResult, calcDescription);
}

function subtract(){
    const enteredNumber = getUserInput()
    const calcDescription = `${currentResult} - ${enteredNumber}`
    currentResult = currentResult - enteredNumber; 
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserInput()
    const calcDescription = `${currentResult} * ${enteredNumber}`
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = getUserInput()
    const calcDescription = `${currentResult} - ${enteredNumber}`
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);
}


addBtn.addEventListener('click', add) //execute function 'indirectly' using DOM  (Document Object Model)
subtractBtn.addEventListener('click', subtract)
