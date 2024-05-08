function addItem() {
    let dropMenuElement = document.getElementById('menu');
    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');
    let newOption = document.createElement('option');
    
    newOption.textContent = textInputElement.value;
    newOption.value = valueInputElement.value;
    dropMenuElement.appendChild(newOption);

    textInputElement.value = '';
    valueInputElement.value = '';
}