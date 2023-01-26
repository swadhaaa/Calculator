// runs as soon as the page loads or reloads
init();

const add = function (a, b) {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
const divide = function (a, b) {
    return a / b;
};
function perform(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case 'add':
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return divide(num1, num2);
    }
}
// DOM elements
const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};