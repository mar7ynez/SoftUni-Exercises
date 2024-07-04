document.querySelector('form').addEventListener('submit', onRegister);

const regURL = 'http://localhost:3030/users/register';

function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    fetch(regURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('All fields required!');
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
    })
}