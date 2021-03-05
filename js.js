const buttons = document.querySelectorAll('.primary');
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#input span');
let press;
let left;
let right;
let oper;

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        press = e.target.innerHTML;
        if (e.target.classList.contains('operator')) {
            left = display.textContent;
            oper = press;
            display.append(press);
        } else if(e.target.classList.contains('num')) {
            display.append(press);
            if (oper) {
                right = diplay.textContent.split(oper)[1];
                alert(yes);
            }
        } else if (press == "C") {
            display.textContent = '\xa0';
            left = "";
            right = "";
        } else if (press == "=") {
            display.textContent = operate(oper, left, right);
        }
    });
});

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(oper, a, b) {
    if (oper == "+") {
        return add(a,b);
    } else if (oper == "-") {
        return subtract(a,b);
    } else if (oper == "×") {
        return multiply(a,b);
    } else if (oper == "÷") {
        return divide(a,b);
    }
}
