//split code into functions (code in Funktionen aufteilen)

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber() {
  return parseInt(userInput.value)
}

function createAndWriteOperator(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription)

}

function add() {
  const enteredValue = getUserInputNumber();
  const initialResult = currentResult
  currentResult = currentResult + enteredValue
  createAndWriteOperator('+', initialResult, enteredValue)
}



//Connect all buttons to function (alle Tasten mit der Funktion verdinden)

function subtract() {
  const enteredValue = getUserInputNumber();
  const initialResult = currentResult
  currentResult = currentResult - enteredValue;
  createAndWriteOperator('-', initialResult, enteredValue)

}

function multiply() {
  const enteredValue = getUserInputNumber();
  const initialResult = currentResult
  currentResult = currentResult * enteredValue;
  createAndWriteOperator('*', initialResult, enteredValue)

}

function devide() {
  const enteredValue = getUserInputNumber();
  const initialResult = currentResult
  currentResult = currentResult / enteredValue;
  createAndWriteOperator('/', initialResult, enteredValue)
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', devide);