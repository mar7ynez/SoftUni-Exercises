const logoutButton = document.querySelector('#logout');

logoutButton.addEventListener('click', onLogout);

function onLogout(e) {
    const url = 'http://localhost:3030/users/logout';
    const data = JSON.parse(localStorage.getItem('userData'));

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Authorization': data.accessToken
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            localStorage.clear();
        })
        .catch(error => {
            alert(error.message);
        });
}