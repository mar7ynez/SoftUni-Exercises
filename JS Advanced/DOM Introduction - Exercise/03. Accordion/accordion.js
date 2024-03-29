function toggle() {

    let buttonText = document.querySelector('.button');
    let extraTextElement = document.getElementById('extra');

    if (buttonText.textContent === 'More') {
        buttonText.textContent = 'Less';
        extraTextElement.style.display = 'block';
        
    } else {
        buttonText.textContent = 'More';
        extraTextElement.style.display = 'none';
    }
}