// Global history array to store all operations
const history = [];

// Functions for basic arithmetic
function add(a, b) {
  const result = a + b;
  addToHistory(a, b, '+', result);
  return result;
}

function subtract(a, b) {
  const result = a - b;
  addToHistory(a, b, '-', result);
  return result;
}

function multiply(a, b) {
  const result = a * b;
  addToHistory(a, b, '*', result);
  return result;
}

function divide(a, b) {
  let result;
  if (b === 0) {
    result = 'Error: Cannot divide by zero';
  } else {
    result = a / b;
  }
  addToHistory(a, b, '/', result);
  return result;
}

// Log each operation to history
function addToHistory(operand1, operand2, operator, result) {
  history.push({
    operand1,
    operand2,
    operator,
    result
  });
}

// Display the history of all calculations
function showHistory() {
  if (history.length === 0) {
    console.log('No calculations yet.');
  } else {
    console.log('Calculation History:');
    history.forEach((entry, index) => {
      console.log(`${index + 1}: (${entry.operand1} ${entry.operator} ${entry.operand2}) = ${entry.result}`);
    });
  }
}

// === TESTING ===
console.log('Add:', add(3, 2));
console.log('Subtract:', subtract(10, 4));
console.log('Multiply:', multiply(5, 5));
console.log('Divide:', divide(20, 0)); // Division by zero
console.log('Divide:', divide(8, 2));
showHistory();