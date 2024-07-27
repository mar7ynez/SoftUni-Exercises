import { router } from "../router.js";

const registerContent = document.querySelector('#register');
const signInButton = registerContent.querySelector('.alreadyUser>a');

signInButton.addEventListener('click', onSignIn);

function renderRegister() {
    registerContent.style.display = 'block';
}

function onSignIn(e) {
    e.preventDefault();

    const url = new URL(e.target);
    router(url.pathname);
}
export { renderRegister };