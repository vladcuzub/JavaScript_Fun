//split code into functions (code in Funktionen aufteilen)

const defaultResult = 0;
let currentResult = defaultResult;

//Gets input from input field
function getUserInputNumber() {
  return parseInt(userInput.value)
}

//Generates and writes calculation log
function createAndWriteOperator(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription)

}


function add() {
  const enteredValue = getUserInputNumber();
  const initialResult = currentResult
  currentResult += enteredValue
  createAndWriteOperator('+', initialResult, enteredValue)
}

function subtract() {
  const enteredValue = getUserInputNumber();
  const initialResult = currentResult
  currentResult -= enteredValue;
  createAndWriteOperator('-', initialResult, enteredValue)

}

function multiply() {
  const enteredValue = getUserInputNumber();
  const initialResult = currentResult
  currentResult += enteredValue;
  createAndWriteOperator('*', initialResult, enteredValue)

}

function devide() {
  const enteredValue = getUserInputNumber();
  const initialResult = currentResult
  currentResult /= enteredValue;
  createAndWriteOperator('/', initialResult, enteredValue)
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', devide);