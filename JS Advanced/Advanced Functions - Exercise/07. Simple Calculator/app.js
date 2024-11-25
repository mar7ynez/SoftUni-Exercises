function calculator() {
    return {
        init: (num1, num2, result) => {
            firstNumElement = document.querySelector(num1);
            secondNumElement = document.querySelector(num2);
            outputElement = document.querySelector(result);
        },
        add: () => {
            outputElement.value = Number(firstNumElement.value) + Number(secondNumElement.value);
        },
        subtract: () => {
            outputElement.value = Number(firstNumElement.value) - Number(secondNumElement.value);
        }
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');