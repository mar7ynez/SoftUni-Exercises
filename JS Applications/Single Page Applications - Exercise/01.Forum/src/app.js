import { post, get, endpoints } from './api.js';
import { createComponent } from './topicComponent.js';

const createTopicForm = document.querySelector('.new-topic-border>form');
createTopicForm.addEventListener('submit', createNewTopic);

const cancelButton = document.querySelector('.cancel');

const topicTitle = document.querySelector('.topic-title');

document.addEventListener('DOMContentLoaded', () => {
    get(endpoints.topics)
        .then(data => createComponent(Object.values(data), topicTitle))
        .catch(error => alert(error.message));
})

function createNewTopic(e) {
    e.preventDefault();

    const formData = new FormData(createTopicForm);
    const { topicName, username, postText } = Object.fromEntries(formData);

    if (!topicName || !username || !postText) {
        return alert('All fields are reuqired!');
    }

    post(endpoints.topics, { topicName, username, postText, date: new Date() })
        .then(data => {
            const postedData = [data];
            createComponent(postedData, topicTitle);
        })
        .catch(error => {
            alert(error.message)
        });

    createTopicForm.reset();
}

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();

    createTopicForm.reset();
});