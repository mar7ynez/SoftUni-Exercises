function solve() {
    let toMenuElement = document.getElementById('selectMenuTo');
    let resultFieldElement = document.getElementById('result');
    let inputElement = document.querySelector('input[type="number"]');
    let buttonElement = document.querySelector('button');

    let binaryOptElement = document.createElement('option');
    let hexadecimalOptElement = document.createElement('option');

    binaryOptElement.value = 'binary';
    binaryOptElement.textContent = 'Binary';
    hexadecimalOptElement.value = 'hexadecimal';
    hexadecimalOptElement.textContent = 'Hexadecimal';

    toMenuElement.appendChild(binaryOptElement);
    toMenuElement.appendChild(hexadecimalOptElement);

    let convertIt = (e) => {
        let inputNumber = inputElement.value;
        let binary = [];
        let hexadecimal = [];

        resultFieldElement.value = '';

        if (toMenuElement.value === 'binary') {
            while (inputNumber !== 0) {
                if (inputNumber % 2 !== 0) {
                    binary.push(1);
                    inputNumber = (inputNumber - 1) / 2;
    
                } else {
                    binary.push(0);
                    inputNumber = inputNumber / 2;
                }
            }
            resultFieldElement.value = binary.reverse().join('');
            
        } else {
            while (inputNumber !== 0) {
                if (inputNumber % 16 !== 0) {
                    hexadecimal.push(inputNumber % 16);
                    inputNumber = (inputNumber - inputNumber % 16) / 16;
                    
                } else {
                    hexadecimal.push(0);
                    inputNumber = inputNumber / 16;
                }
            }
            hexadecimal.reverse().forEach(num => {
                num >= 10 ? hexadecimal.splice(hexadecimal.indexOf(num), 1, num.toString(16).toUpperCase()) : num;
            });
            resultFieldElement.value = hexadecimal.join('');
        }
    }
    buttonElement.addEventListener('click', convertIt);
}