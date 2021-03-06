const buttons = document.querySelectorAll('.primary');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#input span');
let press;
let left = "";
let right = "";
let oper;
let sol;

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        press = e.target.innerHTML;
        if (press == "=") {
            if(left && oper && right) {
                solve();
            }
        }
    });
});

numbers.forEach((button) => {
    button.addEventListener('click', function(e) {
        if(!oper) {
            if (press == ".") {
                if (left.includes(".")) {
                    press = "";
                }
            }
            left+=press;
            display.append(press);
        } else {
            if (press == ".") {
                if (right.includes(".")) {
                    press = "";
                }
            }
            right+=press;
            display.append(press);        
        }
    })
})

operators.forEach((button) => {
    button.addEventListener('click', function(e) {
        if(press=="C") {
            clear();
        }
        if(left && !right) {
           oper = press;
           display.append(press); 
        } else if (left && right) {
            solve();
            oper = press;
            display.append(press);
        }
    })
})

const solve = function() {
    sol = operate(oper, left, right);
    if (sol.toString().length > 20) {
        sol = Math.round((sol + Number.EPSILON) * 100000) / 100000;
    }
    left = sol;
    right = "";
    oper = "";
    display.textContent = left;
}

const clear = function() {
    display.textContent = '\xa0';
    left = "";
    right = "";
    oper = "";
    sol = "";
}

const add = function(a, b) {
    return Number(a) + Number(b);
}

const subtract = function(a, b) {
    return Number(a) - Number(b);
}

const multiply = function(a, b) {
    return Number(a) * Number(b);
}

const divide = function(a, b) {
    return Number(a) / Number(b);
}

const operate = function(oper, a, b) {
    if (oper == "+") {
        return add(a,b);
    } else if (oper == "−") {
        return subtract(a,b);
    } else if (oper == "×") {
        return multiply(a,b);
    } else if (oper == "÷") {
        return divide(a,b);
    }
}
