const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

const divide = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
        alert('0 cannot be used as a divisor. Your entry has been changed to 1 instead.');
        secondNumber = 1;
    };
    return firstNumber % secondNumber !== 0 ? (firstNumber/secondNumber).toFixed(3) : firstNumber / secondNumber;
}; // when the result of a division includes decimal numbers. The function returns the quotient to
   // three decimal places.

function operate(operator, firstNumber, secondNumber) {
    let result;
    switch(operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = subtract(firstNumber, secondNumber);
            break;
        case '*':
            result = multiply(firstNumber, secondNumber);
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            break;
    }
    return result;
}

function calculateSolution(display, operator, firstNumber, secondNumber) {

    /*When the equal sign is clicked on the calculator. The second number is collected from the display
      and stored in a variable. All necessary parts of the calculation are then passed to the operate
      function to perform the calculation and display the result.*/

    let operatorIndex = display.textContent.indexOf(operator);
    secondNumber = Number(display.textContent.slice(operatorIndex + 1).trimStart());
    display.textContent = operate(operator, firstNumber, secondNumber);
}

let operands = [];
let signs = [];

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');

numbers.forEach(number => number.addEventListener('click',() => {
    display.textContent += number.textContent;
}));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => {
    if (signs.length === 0) {
        operands.push(Number(display.textContent));
    } else {
        let operatorIndex = display.textContent.lastIndexOf(signs[signs.length - 1]) + 2;
        operands.push(Number(display.textContent.slice(operatorIndex)));
    }
    signs.push(operator.textContent);
    display.textContent += ` ${operator.textContent} `;
}));

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => calculateSolution(display,operator,firstNumber,secondNumber));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    display.textContent = '';
}); // The clear button clears the display and nullifies all variables to prepare for the next calculation.