const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
let operator = null;
let firstOperand = null;
let resetDisplay = false;

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(number) {
  if (resetDisplay) {
    currentInput = number;
    resetDisplay = false;
  } else {
    if (currentInput === '0' && number !== '.') {
      currentInput = number;
    } else if (number === '.' && currentInput.includes('.')) {
      return; // éviter plusieurs points
    } else {
      currentInput += number;
    }
  }
}

function chooseOperator(op) {
  if (operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(currentInput);
  operator = op;
  resetDisplay = true;
}

function calculate() {
  if (operator === null || resetDisplay) return;

  const secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        alert("Division par zéro impossible !");
        clearAll();
        return;
      }
      result = firstOperand / secondOperand;
      break;
    case '%':
      result = firstOperand % secondOperand;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  resetDisplay = true;
}

function clearAll() {
  currentInput = '0';
  operator = null;
  firstOperand = null;
  resetDisplay = false;
}

function backspace() {
  if (resetDisplay || currentInput.length === 1) {
    currentInput = '0';
    resetDisplay = false;
  } else {
    currentInput = currentInput.slice(0, -1);
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.number) {
      appendNumber(button.dataset.number);
      updateDisplay();
    } else if (button.dataset.action) {
      switch (button.dataset.action) {
        case 'clear':
          clearAll();
          updateDisplay();
          break;
        case 'backspace':
          backspace();
          updateDisplay();
          break;
        case '=':
          calculate();
          updateDisplay();
          break;
        case '%':
          // Pourcentage simple : diviser par 100
          currentInput = (parseFloat(currentInput) / 100).toString();
          updateDisplay();
          break;
        default:
          chooseOperator(button.dataset.action);
          break;
      }
    }
  });
});

updateDisplay();
