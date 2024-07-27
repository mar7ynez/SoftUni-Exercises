function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function hideContent() {
    const mainContent = document.querySelectorAll('main>div');

    mainContent.forEach(content => content.style.display = 'none');
}

export { getUserData, setUserData, hideContent };