const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

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

function calculateSolution(display, signs, operands) {
    //This function receives all operators and operands entered by the user.
    
    let operatorIndex = display.textContent.lastIndexOf(signs[signs.length - 1]) + 2;
    operands.push(Number(display.textContent.slice(operatorIndex)));
    //The final number entered by th user is collected using the above code.

    let solution = operands[0];
    for (let i = 0; i  < signs.length; i++) {
        solution = operate(signs[i], solution, operands[i+1]); 
    }

    solution = solution.toString();
    if (solution.length >= 10) solution = solution.slice(0,10);

    display.textContent = solution;
    // A for loop is used to iteratively calculate each pair of expressions and a final solution is
    // displayed when the loop ends.
}

function computeOperator(operator, display, signs, operands) {

    /* When an operator is pressed by the user. The sign of the operator is added on to the signs array.
       The operand on the right side of the expression is appended to the operands array. These values
       are later used to calculate the solution of the overall expression when the '=' is pressed.*/

    if (signs.length === 0) {
        operands.push(Number(display.textContent));
    } else {
        let operatorIndex = display.textContent.lastIndexOf(signs[signs.length - 1]) + 2;
        operands.push(Number(display.textContent.slice(operatorIndex)));
    }
    signs.push(operator.textContent);
    display.textContent += ` ${operator.textContent} `;
}

let operands = []; // stores all the operands entered in a single expression.
let signs = []; // stores all the operators clicked in a single expression.

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');

numbers.forEach(number => number.addEventListener('click',() => {
    display.textContent += number.textContent;
}));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click',() => computeOperator(operator, display, signs, operands)));

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => calculateSolution(display, signs, operands));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    operands = [];
    signs = [];
    display.textContent = '';
});