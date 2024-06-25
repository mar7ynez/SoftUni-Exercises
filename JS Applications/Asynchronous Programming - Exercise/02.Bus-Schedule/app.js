function solve() {
    const departBtnElement = document.getElementById('depart');
    const arriveBtnElement = document.getElementById('arrive');
    const infoElement = document.getElementById('info');

    let nextStop = {
        next: 'depot'
    };

    arriveBtnElement.setAttribute('disabled', 'disabled');
    infoElement.textContent = 'Not Connected';

    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStop.next}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                nextStop = data;
                infoElement.textContent = `Next stop ${data.name}`;
                departBtnElement.setAttribute('disabled', 'disabled');
                arriveBtnElement.removeAttribute('disabled');
            })
            .catch(error => {
                infoElement.textContent = 'Error';
                departBtnElement.setAttribute('disabled', 'disabled');
                arriveBtnElement.setAttribute('disabled', 'disabled');
            });
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${nextStop.name}`;
        departBtnElement.removeAttribute('disabled');
        arriveBtnElement.setAttribute('disabled', 'disabled');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();