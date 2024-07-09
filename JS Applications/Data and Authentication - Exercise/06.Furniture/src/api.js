const userData = localStorage.getItem('userData');

function request(url, method, data) {
    const options = {
        method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (userData) {
        options['X-Authorization'] = userData.accessToken;
    }

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
        .then(data => {
            localStorage.setItem('userData', JSON.stringify(data));
        })
        .then(error => {
            alert(error.message);
        })
}

export { request };