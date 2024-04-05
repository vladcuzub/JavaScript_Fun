//split code into functions (code in Funktionen aufteilen)

const defaultResult = 0;
let currentResult = defaultResult;

function getEnteredValue() {
  return parseInt(userInput.value)
}

function add() {
  const enteredValue = getEnteredValue()
  const calcDescription = `${currentResult} + ${enteredValue}`;
  currentResult = currentResult + enteredValue;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
