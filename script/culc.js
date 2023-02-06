let operandOne = 0;
let operandTwo = 0;
let comand = "+";

document.getElementById("one").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "1" : inputValue + "1";
});
document.getElementById("two").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "2" : inputValue + "1";
});
document.getElementById("three").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "3" : inputValue + "3";
});
document.getElementById("four").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "4" : inputValue + "4";
});
document.getElementById("five").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "5" : inputValue + "5";
});
document.getElementById("six").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "6" : inputValue + "6";
});
document.getElementById("seven").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "7" : inputValue + "7";
});
document.getElementById("eight").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "8" : inputValue + "8";
});
document.getElementById("nine").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "9" : inputValue + "9";
});
document.getElementById("ziro").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = isCorrectEnter(inputValue) ? "0" : inputValue + "0";
});
document.getElementById("reset").addEventListener('click', function () {
    document.getElementById("result").value = "0";
});
document.getElementById("backspase").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = inputValue.substring(0, inputValue.length - 1);
});
document.getElementById("plus").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandOne = isNaN(inputValue) ? 0 : Number(inputValue);
    comand = "+";
    document.getElementById("result").value = "0";
});
document.getElementById("minus").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandOne = isNaN(inputValue) ? 0 : Number(inputValue);
    comand = "-";
    document.getElementById("result").value = "0";
});
document.getElementById("multiply").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandOne = isNaN(inputValue) ? 0 : Number(inputValue);
    comand = "*";
    document.getElementById("result").value = "0";
});
document.getElementById("divide").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandOne = isNaN(inputValue) ? 0 : Number(inputValue);
    comand = "/";
    document.getElementById("result").value = "0";
});
document.getElementById("report").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandTwo = Number(inputValue);
    let result;
    switch (comand) {
        case "+": {
            result = operandOne + operandTwo;
            break;
        }
        case "-": {
            result = operandOne - operandTwo;
            break;
        }
        case "/": {
            result = (operandTwo !== 0) ? operandOne / operandTwo : " дел. на 0";
            break;
        }
        case "*": {
            result = operandOne * operandTwo;
            break;
        }
        default: {
            result = "помилка"
            break;
        }
    }

    document.getElementById("result").value = result;

});

function isCorrectEnter(inputValue) {
    return inputValue === "0" || isNaN(inputValue);
}