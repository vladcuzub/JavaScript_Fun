const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value) // parseInt - convert string to a number 
}

function crateAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult = currentResult + enteredNumber;
    crateAndWriteOutput('+', initialResult, enteredNumber)

}

function subtract() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult = currentResult - enteredNumber;
    crateAndWriteOutput('-', initialResult, enteredNumber)

}

function multiply() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult = currentResult * enteredNumber;
    crateAndWriteOutput('*', initialResult, enteredNumber)

}

function divide() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult = currentResult / enteredNumber;
    crateAndWriteOutput('/', initialResult, enteredNumber)

}


addBtn.addEventListener('click', add) //execute function 'indirectly' using DOM  (Document Object Model)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
