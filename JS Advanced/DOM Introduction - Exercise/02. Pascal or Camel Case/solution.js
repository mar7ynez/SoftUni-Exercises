function solve() {
  let inputElement = document.getElementById('text').value;
  let caseElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  let inputText = inputElement.toLowerCase().split(' ');
  let outputCase = [];

  for (let i = 0; i < inputText.length; i++) {
    if (caseElement === 'Camel Case') {
      if (i !== 0) {
        let caseToCamel = inputText[i].replace(inputText[i][0], inputText[i][0].toUpperCase());
        outputCase.push(caseToCamel);
        continue;
      }
      outputCase.push(inputText[i]);

    } else if (caseElement === 'Pascal Case') {
      let caseToPascal = inputText[i].replace(inputText[i][0], inputText[i][0].toUpperCase());
      outputCase.push(caseToPascal);
      continue;
    }
  }
  caseElement !== 'Camel Case' && caseElement !== 'Pascal Case' ? resultElement.textContent = 'Error!' : resultElement.textContent = outputCase.join('');
}