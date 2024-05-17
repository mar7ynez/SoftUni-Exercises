function generateReport() {
    let checkBoxElements = [...document.querySelectorAll('input[type="checkbox"]')];
    let trElements = document.querySelectorAll('tbody > tr');
    let outputElement = document.getElementById('output');
    let output = [];

    let selectedColumn = checkBoxElements.filter(element => element.checked);

    for (let i = 0; i < trElements.length; i++) {
        let reportReg = {};

        selectedColumn.forEach(el => {
            let idx = checkBoxElements.indexOf(el);
            reportReg[el.name] = trElements[i].children[idx].textContent;
        });
        output.push(reportReg);
    }
    selectedColumn.length ? outputElement.textContent = JSON.stringify(output) : outputElement.textContent = '';
}