import { updateNav, getRequest, addHandler, renderCatches,fieldSetRef } from "./util.js";

fieldSetRef.style.border = 'none';
fieldSetRef.textContent = 'Click to load catches'

updateNav();

addHandler('#logout', 'click', onLogout);
addHandler('.load', 'click', onLoad);

function onLogout(e) {
    const url = 'http://localhost:3030/users/logout';

    e.preventDefault();

    const data = JSON.parse(localStorage.getItem('userData'));

    const options = {
        method: 'GET',
        headers: {
            'X-Authorization': data.accessToken
        }
    }

    getRequest(url, null, options, true, true);
}

function onLoad(e) {
    const url = 'http://localhost:3030/data/catches';

    getRequest(url, renderCatches);
}