import { router } from "../router.js";

const loginContent = document.querySelector('#login');
const signUpButton = loginContent.querySelector('.alreadyUser>a');

signUpButton.addEventListener('click', onSignUp);

function renderLogin() {
    loginContent.style.display = 'block';
}

function onSignUp(e) {
    e.preventDefault();

    const url = new URL(e.target);
    router(url.pathname);
}
export { renderLogin };