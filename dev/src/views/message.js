import html from './message.html';
import './message.css';

let body;
let tmp = document.createElement('div');
tmp.innerHTML = html;
let container = tmp.querySelector('.tlgc');
let elements = [];

/* Initial configuration for the widget */
export function config(config) {
  // Add animations if the option is enabled

  let temporary = document.createElement('div');
  temporary.innerHTML = html;

  if (config.useAnimations) {
    container.querySelector('.tlgm').classList.add('slide');
    container.querySelector('.telewidget-button').classList.add('zoomIn');
  }

  body = document.getElementsByTagName('body')[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }

  // Add dark theme classes if the option is enabled
  if (config.useDarkTheme) {
    container.classList.add('dark');
  }

  // Welcome message
  if (config.message) {
    // If we use cookies, check to see if the cookie exists already
    if (
      config.useCookies &&
      document.cookie.match(/^(.*;)?\s*showmessage\s*=\s*[^;]+(.*)?$/) == null
    ) {
      container.querySelector(
        '.tlgm'
      ).innerHTML = `${config.message} <span></span>`;
      // Event listener to close the message on the widget
      container
        .querySelector('.tlgm span')
        .addEventListener('click', closeMessage);
      // Create the cookie
      createCookie('showmessage', 'no', 1);
      // Show the message if we're not using cookies
    } else if (!config.useCookies) {
      container.querySelector(
        '.tlgm'
      ).innerHTML = `${config.message} <span></span>`;
      // Event listener to close the message on the widget
      container
        .querySelector('.tlgm span')
        .addEventListener('click', closeMessage);
      // Remove the div that contains the welcome message if we're using the cookie and it already exists
    } else {
      container.querySelector('.tlgm').remove();
    }
    // If there's no welcome message, remove that div
  } else {
    container.querySelector('.tlgm').remove();
  }

  // Add telegram link
  if (config.users) {
    try {
      let randomUsers =
        config.users[Math.floor(Math.random() * config.users.length)];

      container.querySelector(
        '.telewidget-button'
      ).href = `https://t.me/${randomUsers}`;
    } catch (error) {
      console.error('telewidget -> cannot select users');
    }
  }

  // Show the widget on the left side of the page
  if (config.floatLeft) {
    container.classList.add('left');
  }

  // Show the widget message on mobile devices
  if (config.showMessageAlways) {
    container.classList.add('show-message-always');
  }

  // Add the widget to the body of your page
  body = document.getElementsByTagName('body')[0];
  body.appendChild(container);

  class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
    }

    clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
    }

    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }

    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '÷':
          computation = prev / current;
          break;
        default:
          return;
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
    }

    getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split('.')[0]);
      const decimalDigits = stringNumber.split('.')[1];
      let integerDisplay;
      if (isNaN(integerDigits)) {
        integerDisplay = '';
      } else {
        integerDisplay = integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0,
        });
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
      } else {
        return integerDisplay;
      }
    }

    updateDisplay() {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(
        this.currentOperand
      );
      if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
          this.previousOperand
        )} ${this.operation}`;
      } else {
        this.previousOperandTextElement.innerText = '';
      }
    }
  }

  const numberButtons = document.querySelectorAll('[data-number]');
  const operationButtons = document.querySelectorAll('[data-operation]');
  const equalsButton = document.querySelector('[data-equals]');
  const deleteButton = document.querySelector('[data-delete]');
  const allClearButton = document.querySelector('[data-all-clear]');
  const previousOperandTextElement = document.querySelector(
    '[data-previous-operand]'
  );
  const currentOperandTextElement = document.querySelector(
    '[data-current-operand]'
  );

  const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );

  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });

  operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });

  equalsButton.addEventListener('click', (button) => {
    calculator.compute();
    calculator.updateDisplay();
  });

  allClearButton.addEventListener('click', (button) => {
    calculator.clear();
    calculator.updateDisplay();
  });

  deleteButton.addEventListener('click', (button) => {
    calculator.delete();
    calculator.updateDisplay();
  });

  body.addEventListener('click', close);
}

/* Close widget welcome message */
export function closeMessage() {
  container.querySelector('.tlgm').style.display = 'none';
}

/* Function to create a cookie to show the message only once every day */
/* Taken from here https://stackoverflow.com/questions/6561687/how-can-i-set-a-cookie-to-expire-after-x-days-with-this-code-i-have */
function createCookie(name, value, days) {
  console.log('creating cookie');

  let date;
  let expires;

  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
  } else {
    expires = '';
  }

  document.cookie = name + '=' + value + expires + '; path=/';
}
