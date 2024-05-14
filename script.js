let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
    if (number === "00" && currentNumber === "0") {
        return; // Prevent leading double zeros
    }
    currentNumber += number;
    document.querySelector(".display").value = currentNumber; // Update display in real-time
}

function selectOperator(op) {
    // Only update previous number if there's a current number and an operator
    if (currentNumber !== "") {
        previousNumber = parseFloat(currentNumber);
        currentNumber = ""; // Clear current number before storing operator
    }
    operator = op;
    document.querySelector(".display").value += op; // Update display with operator in real-time
}

function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1);
    if (currentNumber.length === 0) {
        currentNumber = "0";
    }
    document.querySelector(".display").value = currentNumber;
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    document.querySelector(".display").value = "0";
}

function calculate() {
    let result = 0;
    const prevNum = parseFloat(previousNumber);
    const currNum = parseFloat(currentNumber);

    switch (operator) {
        case "+":
            result = prevNum + currNum;
            break;
        case "-":
            result = prevNum - currNum;
            break;
        case "*":
            result = prevNum * currNum;
            break;
        case "/":
            if (currNum === 0) {
                alert("Error: Division by zero");
                return;
            }
            result = prevNum / currNum;
            break;
    }

    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
    document.querySelector(".display").value = currentNumber;
}
