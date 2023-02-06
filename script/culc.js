
let operandOne = 0;
let operandTwo = 0;
let comand = "+";

document.getElementById("one").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "1" : inputValue + "1";
});
document.getElementById("two").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "2" : inputValue + "1";
});
document.getElementById("three").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "3" : inputValue + "3";
});
document.getElementById("four").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "4" : inputValue + "4";
});
document.getElementById("five").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "5" : inputValue + "5";
});
document.getElementById("six").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "6" : inputValue + "6";
});
document.getElementById("seven").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "7" : inputValue + "7";
});
document.getElementById("eight").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "8" : inputValue + "8";
});
document.getElementById("nine").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "9" : inputValue + "9";
});
document.getElementById("ziro").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    document.getElementById("result").value = (inputValue === "0" || isNaN(inputValue)) ? "0" : inputValue + "0";
});
document.getElementById("reset").addEventListener('click', function () {
    document.getElementById("result").value = "0";
});
document.getElementById("backspase").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    let arrSymbol = inputValue.split("");
    arrSymbol.pop();
    let modifyValue = arrSymbol.join("");
    document.getElementById("result").value = modifyValue;
});
document.getElementById("plus").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandOne = Number(inputValue);
    comand = "+";
    document.getElementById("result").value = "0";
});document.getElementById("minus").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandOne = Number(inputValue);
    comand = "-";    
    document.getElementById("result").value = "0";
});
document.getElementById("multiply").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandOne = Number(inputValue);
    comand = "*";    
    document.getElementById("result").value = "0";
});
document.getElementById("divide").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandOne = Number(inputValue);
    comand = "/";    
    document.getElementById("result").value = "0";
});
document.getElementById("report").addEventListener('click', function () {
    let inputValue = document.getElementById("result").value;
    operandTwo = Number(inputValue); 
    console.log(operandOne + " : " + operandTwo);
    let result;
    switch (comand){
        case "+": {
            console.log(operandOne + " + " + operandTwo)
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