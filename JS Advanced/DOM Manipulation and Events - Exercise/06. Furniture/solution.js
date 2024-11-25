function solve() {
  let buttonElements = document.querySelectorAll('button');
  let textAreaElements = document.querySelectorAll('div > textarea');
  let tableBodyElement = document.querySelector('tbody');

  let [genButton, buyButton] = buttonElements;

  const onGenerateClick = (e) => {
    const furniDetails = JSON.parse(textAreaElements[0].value);

    furniDetails.forEach(element => {

      const imgFragment = document.createDocumentFragment();
      const nameFragment = document.createDocumentFragment();
      const priceFragment = document.createDocumentFragment();
      const decoFragment = document.createDocumentFragment();
      const checkBoxFragment = document.createDocumentFragment();

      const newTrElement = document.createElement('tr');

      const imgElement = imgFragment.appendChild(document.createElement('td')).appendChild(document.createElement('img'));
      imgElement.src = element.img;

      const nameElement = nameFragment.appendChild(document.createElement('td')).appendChild(document.createElement('p'));
      nameElement.textContent = element.name;

      const priceElement = priceFragment.appendChild(document.createElement('td')).appendChild(document.createElement('p'));
      priceElement.textContent = Number(element.price);

      const decoElement = decoFragment.appendChild(document.createElement('td')).appendChild(document.createElement('p'));
      decoElement.textContent = Number(element.decFactor);

      const checkBoxElement = checkBoxFragment.appendChild(document.createElement('td')).appendChild(document.createElement('input'));
      checkBoxElement.type = 'checkbox';

      newTrElement.appendChild(imgFragment);
      newTrElement.appendChild(nameFragment);
      newTrElement.appendChild(priceFragment);
      newTrElement.appendChild(decoFragment);
      newTrElement.appendChild(checkBoxFragment);
      tableBodyElement.appendChild(newTrElement);

      textAreaElements[0].value = '';
    });
  }

  const onBuyClick = (e) => {
    let checkboxElements = document.querySelectorAll('td > input[type="checkbox"]');
    let products = [];
    let totalPrice = 0;
    let avgDecFactor = 0;

    for (let box of checkboxElements) {
      if (box.checked) {
        products.push(box.parentNode.parentNode.querySelector('p:nth-of-type(1)').textContent);
        let curProductPrice = Number(box.parentNode.parentNode.querySelector('td:nth-of-type(2n + 1) > p').textContent);
        let decFactorVal = Number(box.parentNode.parentNode.querySelector('td:nth-of-type(4n) > p').textContent);
        totalPrice += curProductPrice;
        avgDecFactor += decFactorVal;
      }
    }
    textAreaElements[1].value = `Bought furniture: ${products.join(', ')}\n`;
    textAreaElements[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
    avgDecFactor / products.length >= 0 ? textAreaElements[1].value += `Average decoration factor: ${avgDecFactor / products.length}` : textAreaElements[1].value += `Average decoration factor: ${avgDecFactor}`;
  }
  genButton.addEventListener('click', onGenerateClick);
  buyButton.addEventListener('click', onBuyClick);
}