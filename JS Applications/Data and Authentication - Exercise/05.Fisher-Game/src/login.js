import { updateNav, postRequest, addHandler } from "./util.js";

updateNav();

addHandler('#login-view>#login', 'submit', onLogin);

function onLogin(e) {
    const url = 'http://localhost:3030/users/login';

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return alert('All fields are required!');
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    postRequest(url, options, 'index.html');
}