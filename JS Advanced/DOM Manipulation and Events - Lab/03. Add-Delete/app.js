function addItem() {

    let listItems = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newListItemElement = document.createElement('li');
    newListItemElement.textContent = inputElement.value;

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    });

    newListItemElement.appendChild(deleteElement);
    listItems.appendChild(newListItemElement);
}