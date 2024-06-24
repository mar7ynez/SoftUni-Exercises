function solve() {
    const inputElements = [...document.querySelectorAll('input')];
    const onScreenButtonElement = document.querySelector('#container>button');
    const clearButtonElement = document.querySelector('#archive>button');

    const moviesOnScreenElement = document.querySelector('#movies>ul');
    const archiveUlElement = document.querySelector('#archive>ul');

    onScreenButtonElement.addEventListener('click', onScreenButtonClick);
    clearButtonElement.addEventListener('click', onClearButtonClick);

    function onScreenButtonClick(e) {
        e.preventDefault();

        const [movieNameElement, hallElement, ticketPriceElement] = inputElements;

        if (inputElements.some(element => element.value === '') || isNaN(Number(ticketPriceElement.value))) {
            return;
        }

        moviesOnScreenElement.appendChild(createLiElement(movieNameElement.value, hallElement.value, ticketPriceElement.value));

        inputElements.forEach(element => element.value = '');
    }

    function onArchiveButtonClick(e) {
        const soldTicketsElement = e.currentTarget.parentNode.querySelector('input');
        const divContainer = e.currentTarget.parentNode;
        const liElement = divContainer.parentNode;

        if (isNaN(Number(soldTicketsElement.value)) || soldTicketsElement.value <= 0) {
            return;
        }

        const totalAmount = Number(soldTicketsElement.value) * Number(divContainer.querySelector('strong').textContent);

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';

        liElement.querySelector('strong').textContent = `Total amount: ${totalAmount.toFixed(2)}`;
        liElement.appendChild(deleteButtonElement);

        divContainer.remove();

        archiveUlElement.appendChild(liElement);

        deleteButtonElement.addEventListener('click', onDeleteButtonClick);
    }

    function onDeleteButtonClick(e) {
        e.currentTarget.parentNode.remove();
    }

    function onClearButtonClick(e) {
        archiveUlElement.innerHTML = '';
    }

    function createLiElement(movieName, strongElContent, ticketPrice) {
        const spanMovieNameElement = document.createElement('span');
        spanMovieNameElement.textContent = movieName;

        const strongHallNameElement = document.createElement('strong');
        strongHallNameElement.textContent = `Hall: ${strongElContent}`;

        const divElement = createDivElement(Number(ticketPrice), 'Tickets Sold', 'Archive');

        const liElement = document.createElement('li');
        liElement.appendChild(spanMovieNameElement);
        liElement.appendChild(strongHallNameElement);
        liElement.appendChild(divElement);

        return liElement;
    }

    function createDivElement(ticketPrice, placeholder, btnContent) {
        const strongPriceElement = document.createElement('strong');
        strongPriceElement.textContent = ticketPrice.toFixed(2);

        const inputPlaceholderElement = document.createElement('input');
        inputPlaceholderElement.setAttribute('placeholder', placeholder);

        const archiveButtonElement = document.createElement('button');
        archiveButtonElement.textContent = btnContent;

        const divElement = document.createElement('div');
        divElement.appendChild(strongPriceElement);
        divElement.appendChild(inputPlaceholderElement);
        divElement.appendChild(archiveButtonElement);

        archiveButtonElement.addEventListener('click', onArchiveButtonClick);

        return divElement;
    }
}