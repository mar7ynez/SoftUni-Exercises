function createComponent(data, topicTitleDiv) {
    data.forEach(curTopic => {
        const topicContainer = document.createElement('div');
        topicContainer.classList.add('topic-container');

        topicContainer.innerHTML = `
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <a href="#" class="normal">
                    <h2>${curTopic.topicName}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>${curTopic.date}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${curTopic.username}</span></p>
                        </div>
                    </div>
                
                
                </div>
            </div>
        </div>
        `;
        
        topicTitleDiv.appendChild(topicContainer);
    });

}

export { createComponent };