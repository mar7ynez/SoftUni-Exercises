function lockedProfile() {
    let buttonElements = document.querySelectorAll('.profile > button');

    for (let button of buttonElements) {
        button.addEventListener('click', onClick);
    }

    function onClick(e) {
        let profileElement = e.target.parentNode;
        let isLocked = profileElement.querySelector('input[value= "lock"]').checked;

        if (!isLocked) {
            if (e.target.textContent === 'Show more') {
                e.target.textContent = 'Hide it';
                profileElement.querySelector('div>div').style.display = 'block';
            } else {
                e.target.textContent = 'Show more';
                profileElement.querySelector('div>div').style.display = 'none';
            }
        }
    }
}