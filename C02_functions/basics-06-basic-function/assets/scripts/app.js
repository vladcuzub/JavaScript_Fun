const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const result = currentResult + userInput.value;
   return result
}

addBtn.addEventListener('click', add) //execute function 'indirectly' using DOM  (Document Object Model)

outputResult(currentResult, calculationDescription);