const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

function operate(operator, firstNumber, secondNumber) {
    /* This function receives an operator and operands. The operator is used to
       determine which calculation function will be executed. The result of the
       selected calculation is then return at the end of the function.*/

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

let operator;
let firstNumber;
let secondNumber;

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');

numbers.forEach(number => number.addEventListener('click',() => {
    display.textContent += number.textContent;
}));

const operators = document.querySelectorAll('.operator');
operators.forEach(operatorElement => operatorElement.addEventListener('click', () => {
    firstNumber = Number(display.textContent);
    operator = operatorElement.textContent;
    display.textContent += ` ${operatorElement.textContent} `;
}))

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    let operatorIndex = display.textContent.indexOf(operator);
    secondNumber = Number(display.textContent.slice(operatorIndex + 1).trimStart());
    display.textContent = operate(operator, firstNumber, secondNumber);
})