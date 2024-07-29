import { requester } from "../api.js";

const dashboardContent = document.querySelector('#dashboard-holder');

const endpoints = {
    dashboard: 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
}

function renderDashboard() {
    dashboardContent.style.display = 'flex';

    requester.get(endpoints.dashboard)
        .then(cardsData => {
            if (cardsData) {
                createCard(cardsData);
            }
        })
}

function createCard(data) {
    dashboardContent.innerHTML = '';
    
    data.forEach(currentData => {
        const cardElement = document.createElement('div');
        cardElement.setAttribute('class', 'card overflow-hidden current-card details');
        cardElement.setAttribute('style', 'width: 20rem; height: 18rem;');

        cardElement.innerHTML = `
        <div class="card-body">
            <p class="card-text">${currentData.title}</p>
        </div>
        <img class="card-image" src="${currentData.img}" alt="Card image cap">
        <a class="btn" href="">Details</a>`;

        dashboardContent.appendChild(cardElement);
    });
}

export { renderDashboard };