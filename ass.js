function seven(){
    
        alertt.innerHTML = 7
}
let newNumber = false;
function pressNumber(number) {
    // const display = document.getElementById("alertt");
    if (newNumber) {
        // display.value = number;
        alertt.value = number
        newNumber = false;
    } else {
        alertt.value += number;
    }
}
function negNumber() {
    const display = document.getElementById("alertt");
    display.value = -Number(display.value);
}
function percNumber() {
    const display = document.getElementById("alertt");
    display.value = Number(display.value)/100;
}
function clearNumber() {
    const display = document.getElementById("alertt");
    display.value = '';
}
let firstNumber;
let operator;

function add() {
    firstNumber = Number(alertt.value);
    operator = "+";
    // alertt.value = "";
    alertt.value = firstNumber + " + ";
    newNumber = true;
}

function subtract() {
    firstNumber = Number(alertt.value);
    operator = "-";
    // alertt.value = "";
    alertt.value = firstNumber + " - ";
    
    newNumber = true;
}

function multiply() {
    firstNumber = Number(alertt.value);
    operator = "*";
    // alertt.value = "";
    alertt.value = firstNumber + " X ";
    newNumber = true;

}

function division() {
    firstNumber = Number(alertt.value);
    operator = "/";
    // alertt.value = "";
    alertt.value = firstNumber + " / ";
    newNumber = true;
}

function calculate() {
    let secondNumber = Number(alertt.value);

    if (operator == "+") {
        alertt.value = firstNumber + secondNumber;
    }

    if (operator == "-") {
        alertt.value = firstNumber - secondNumber;
    }

    if (operator == "*") {
        alertt.value = firstNumber * secondNumber;
    }

    if (operator == "/") {
        alertt.value = secondNumber !== 0
            ? firstNumber / secondNumber
            : "Cannot divide by zero";
    }
    newNumber = true;
}