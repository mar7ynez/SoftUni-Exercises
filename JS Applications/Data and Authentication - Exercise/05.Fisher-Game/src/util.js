const userNavRef = document.querySelector('#user');
const guestNavRef = document.querySelector('#guest');
const welcomeMsgRef = document.querySelector('.email>span');
const fieldSetRef = document.querySelector('#main');
const addButtonRef = document.querySelector('.add');
const formElement = document.querySelector('form');

const endpoints = {
    catches: 'http://localhost:3030/data/catches',
    logout: 'http://localhost:3030/users/logout',
    login: 'http://localhost:3030/users/login',
    register: 'http://localhost:3030/users/register',
}

const userData = JSON.parse(localStorage.getItem('userData'));

function updateNav() {
    if (localStorage.getItem('userData')) {
        if (addButtonRef) {
            addButtonRef.removeAttribute('disabled');
        }

        userNavRef.style.display = 'inline-block';
        guestNavRef.style.display = 'none';
        welcomeMsgRef.textContent = userData.email;
    } else {
        if (addButtonRef) {
            addButtonRef.setAttribute('disabled', 'disabled');
        }

        userNavRef.style.display = 'none';
        guestNavRef.style.display = 'inline-block';
        welcomeMsgRef.textContent = 'guest';
    }
}

function postRequest(url, callback, options, location, storageUse) {
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            formElement.reset();
            return response.json();
        })
        .then(data => {
            if (storageUse) {
                localStorage.setItem('userData', JSON.stringify(data));
            }
            if (callback) {
                fieldSetRef.style.border = 'solid black 2px';
                fieldSetRef.textContent = '';
                renderLegend();
                callback(data);
            }
            if (location) {
                window.location = location;
            }
        })
        .catch(error => {
            alert(error.message);
        });
}

function getRequest(url, callback, options, updateNavi, clearStorage) {
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            if (clearStorage) {
                localStorage.clear();
            }

            if (updateNavi) {
                updateNav();
            }

            if (response.statusText !== 'No Content') {
                return response.json();
            }
        })
        .then(data => {
            if (callback) {
                renderLegend();
                fieldSetRef.style.border = 'solid black 2px';
                data.forEach(curData => {
                    callback(curData);
                })
            }
        })
        .catch(error => {
            alert(error);
        })
}

function renderCatches(data) {
    const divContainer = document.createElement('div');
    divContainer.id = 'catches';

    const {
        _ownerId, angler,
        weight,
        species,
        location,
        bait,
        captureTime,
        _id,
    } = data;

    let hasOwner = userData._id === _ownerId;

    const divElement = document.createElement('div');
    divElement.classList.add('catch');

    divElement.innerHTML = `
            <label>Angler</label>
            <input type="text" class="angler" value="${angler}">
            <label>Weight</label>
            <input type="text" class="weight" value="${weight}">
            <label>Species</label>
            <input type="text" class="species" value="${species}">
            <label>Location</label>
            <input type="text" class="location" value="${location}">
            <label>Bait</label>
            <input type="text" class="bait" value="${bait}">
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${captureTime}">
            <button class="update" ${!hasOwner ? 'disabled' : ''} data-id="${_id}">Update</button>
            <button class="delete" ${!hasOwner ? 'disabled' : ''} data-id="${_id}">Delete</button>`;

    divContainer.appendChild(divElement);
    fieldSetRef.appendChild(divContainer);

    const updateButton = divElement.querySelector('.update');
    const deleteButton = divElement.querySelector('.delete');

    if (updateButton) {
        updateButton.addEventListener('click', handleUpdate);
    }

    if (deleteButton) {
        deleteButton.addEventListener('click', handleDelete);
    }
}

function handleUpdate(e) {
    const catchId = e.currentTarget.getAttribute('data-id');
    const inputFields = [...e.currentTarget.parentNode.querySelectorAll('input')];
    const body = {};

    inputFields.forEach(field => body[field.className] = field.value);

    fetch(`${endpoints.catches}/${catchId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': userData.accessToken },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
        .catch(error => {
            alert(error);
        });
}

function handleDelete(e) {
    const catchId = e.currentTarget.getAttribute('data-id');

    fetch(`${endpoints.catches}/${catchId}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': userData.accessToken },
    });
    e.currentTarget.parentNode.remove();
}

function renderLegend() {
    const legendElement = document.createElement('legend');
    legendElement.textContent = 'Catches';
    fieldSetRef.appendChild(legendElement);
}

function addHandler(element, eventType, callback) {
    document.querySelector(element).addEventListener(eventType, callback);
}

export {
    updateNav,
    postRequest,
    getRequest,
    addHandler,
    renderCatches,
    handleUpdate,
    handleDelete,
    endpoints,
    fieldSetRef
}