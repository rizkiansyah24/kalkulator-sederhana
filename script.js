const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

function updateDisplay() {
  display.value = currentInput;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    if (value) {
      currentInput += value;
      updateDisplay();
    } else if (button.id === 'clear') {
      currentInput = '';
      updateDisplay();
    } else if (button.id === 'equal') {
      try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
      } catch {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
          currentInput = '';
          updateDisplay();
        }, 1000);
      }
    }
  });
});

// Keyboard input
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.=';
  if (allowedKeys.includes(e.key)) {
    if (e.key === '=') {
      try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
      } catch {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
          currentInput = '';
          updateDisplay();
        }, 1000);
      }
    } else {
      currentInput += e.key;
      updateDisplay();
    }
  } else if (e.key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
      updateDisplay();
    } catch {
      currentInput = 'Error';
      updateDisplay();
      setTimeout(() => {
        currentInput = '';
        updateDisplay();
      }, 1000);
    }
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (e.key === 'Escape') {
    currentInput = '';
    updateDisplay();
  }
});
