function getUserData() {
    const userData = localStorage.getItem('userData');

    return JSON.parse(userData);
}

function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

export { getUserData, setUserData };