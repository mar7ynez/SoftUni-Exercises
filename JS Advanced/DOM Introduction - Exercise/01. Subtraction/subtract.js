function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
    let secondNumElement = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');

    let firstNumber = Number(firstNumElement.value);
    let secondNumber = Number(secondNumElement.value);
    
    resultElement.textContent = firstNumber - secondNumber;
}