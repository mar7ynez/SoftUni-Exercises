function sumTable() {

    let productCostElements = document.querySelectorAll('td + td');
    let sumElement = document.getElementById('sum');

    let sum = 0;

    for (let i = 0; i < productCostElements.length - 1; i++) {
        sum += Number(productCostElements[i].textContent);

    }
    sumElement.textContent = sum;
}