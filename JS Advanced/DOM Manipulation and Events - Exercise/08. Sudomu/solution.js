function solve() {
    let [checkButton, clearButton] = document.querySelectorAll('button');
    let checkResultElement = document.querySelector('#check > p');
    let tableBodyElement = document.querySelector('table');
    let inputNumberElements = document.querySelectorAll('input[type="number"]');

    checkButton.style.cursor = 'pointer';
    clearButton.style.cursor = 'pointer';

    let resultCheck = (e) => {
        let sudokuBoard = [
            [inputNumberElements[0].value, inputNumberElements[1].value, inputNumberElements[2].value],
            [inputNumberElements[3].value, inputNumberElements[4].value, inputNumberElements[5].value],
            [inputNumberElements[6].value, inputNumberElements[7].value, inputNumberElements[8].value],
        ];

        isSolved = true;

        for (let i = 1; i < sudokuBoard.length; i++) {
            let row = sudokuBoard[i];
            let col = sudokuBoard.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isSolved = false;
                break;
            }
        }

        if (isSolved) {
            tableBodyElement.style.border = '2px solid green';
            checkResultElement.textContent = 'You solve it! Congratulations!';
            checkResultElement.style.color = 'green';

        } else {
            tableBodyElement.style.border = '2px solid red';
            checkResultElement.textContent = 'NOP! You are not done yet...';
            checkResultElement.style.color = 'red';
        }
    }

    let boardClean = (e) => {
        inputNumberElements.forEach(e => e.value = '');
        tableBodyElement.style.border = 'none';
        checkResultElement.textContent = '';
    }
    clearButton.addEventListener('click', boardClean);
    checkButton.addEventListener('click', resultCheck);
}