import { getUserData } from './utils.js';

const hostName = 'http://localhost:3030';
const endpoints = {
    movies: '/data/movies',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

function requester(method, url, data) {

    const options = {
        method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    return fetch(`${hostName}${url}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
        .catch(error => {
            alert(error.message);
        });
}

const api = {
    get: (url) => requester('GET', url),
    post: (url, data) => requester('POST', url, data),
    put: (url, data) => requester('PUT', url, data),
    delete: (url) => requester('DELETE', url),
}

export { api, endpoints };