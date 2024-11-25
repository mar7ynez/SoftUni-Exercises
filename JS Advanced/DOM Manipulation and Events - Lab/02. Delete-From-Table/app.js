function deleteByEmail() {

    let inputEmailElement = document.querySelector('input[name="email"]');
    let emailTableElements = document.querySelectorAll('tr>td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(emailTableElements);
    let targetEmail = emailElements.find(x => x.textContent === inputEmailElement.value);

    if (targetEmail) {
        targetEmail.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}