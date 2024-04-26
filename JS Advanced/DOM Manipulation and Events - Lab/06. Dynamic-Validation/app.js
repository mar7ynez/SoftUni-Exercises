function validate() {
    let inputElement = document.getElementById('email');

    const inputValue = (e) => {
        let pattern = /[a-z]+@[a-z]+.[a-z]+/g;

        inputElement.className = '';

        if (!pattern.test(e.target.value)) {
            inputElement.className = 'error';
        }
    } 
    inputElement.addEventListener('change', inputValue);
}