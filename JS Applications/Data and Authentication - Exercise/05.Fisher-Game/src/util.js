const userNavRef = document.querySelector('#user');
const guestNavRef = document.querySelector('#guest');
const welcomeMsgRef = document.querySelector('.email>span');
const fieldSetRef = document.querySelector('#main');
const addButtonRef = document.querySelector('.add');

const userData = JSON.parse(localStorage.getItem('userData'));

function updateNav() {
    if (localStorage.getItem('userData')) {
        userNavRef.style.display = 'inline-block';
        guestNavRef.style.display = 'none';
        welcomeMsgRef.textContent = userData.email;
        addButtonRef.removeAttribute('disabled');

    } else {
        if (addButtonRef) {
            addButtonRef.setAttribute('disabled', 'disabled');
        }
        userNavRef.style.display = 'none';
        guestNavRef.style.display = 'inline-block';
        welcomeMsgRef.textContent = 'guest';
    }
}

function postRequest(url, options, location) {
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json();
        })
        .then(data => {
            localStorage.setItem('userData', JSON.stringify(data));

            if (location) {
                window.location = location;
            }
        })
        .catch(error => {
            alert(error.message);
            formElement.reset();
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
                callback(data);
            }
        })
        .catch(error => {
            alert(error);
        })
}

function renderCatches(data) {
    const divContainer = document.createElement('div');
    divContainer.id = 'catches';

    fieldSetRef.innerHTML = '';

    data.forEach(currentData => {
        const {
            _ownerId, angler,
            weight,
            species,
            location,
            bait,
            captureTime,
            _id,
        } = currentData;

        let hasOwner = userData?._id === _ownerId;

        const divElement = document.createElement('div');
        divElement.classList.add('catch');

        divElement.innerHTML = `
        <div class="catch">
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
            <button class="delete" ${!hasOwner ? 'disabled' : ''} data-id="${_id}">Delete</button>
        </div>`;

        divContainer.appendChild(divElement);
        fieldSetRef.appendChild(divContainer);
    })
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
    fieldSetRef
}