const formElement = document.querySelector('form');

formElement.addEventListener('submit', onRegister);

const regURL = 'http://localhost:3030/users/register';

function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('rePass');

    if (!email || !password) {
        return alert('All fields are required!');
    }
    if (password !== rePassword) {
        return alert('Password does not match!')
    }

    fetch(regURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status);
        }

        return response.json();
    })
    .then(data => {
        localStorage.setItem('userData', JSON.stringify(data));
        window.location = 'index.html';
    })
    .catch(error => {
        alert(`${error}`);
        formElement.reset();
    })
}