function comments(data) {

    let userRegister = [];
    let articleRegister = {};

    for (let info of data) {
        if (info.includes('user')) {
            let username = info.split(' ')[1];

            if (!userRegister.includes(username)) {
                userRegister.push(username);

            }
        } else if (info.includes('article')) {
            let article = info.split(' ')[1];

            if (!articleRegister.hasOwnProperty(article)) {
                articleRegister[article] = [];

            }
        } else {
            let [username, articleData] = info.split(' posts on ');
            if (!userRegister.includes(username)) {
                continue;

            }
            let [article, commentData] = articleData.split(': ');
            if (!articleRegister.hasOwnProperty(article)) {
                continue;

            }
            let [commentTitle, commentContent] = commentData.split(', ');
            articleRegister[article].push({
                user: username,
                articleName: article,
                commentName: commentTitle,
                content: commentContent,

            });
        }
    }
    for (let [articleName, articleData] of Object.entries(articleRegister).sort((a, b) => b[1].length - a[1].length)) {
        console.log(`Comments on ${articleName}`);
        articleData.sort((a, b) => a.user.localeCompare(b.user)).forEach(comment => console.log(`--- From user ${comment.user}: ${comment.commentName} - ${comment.content}`));
        
    }
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);