function getArticleGenerator(articles) {
    let contentElement = document.getElementById('content');

    return function () {
        let articleElement = document.createElement('article');

        if (articles.length > 0) {
            articleElement.textContent = articles.shift();
        } else {
            return;
        }
        contentElement.appendChild(articleElement);
    }
}
