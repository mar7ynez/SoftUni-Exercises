const http = require('http');
const homeHtml = require('./views/homeView.html');
const siteCss = require('./views/site.css');
const addBreed = require('./views/addBreed.html');
const addCat = require('./views/addCat.html');
const { cats } = require('./cats');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': res.writeHead(200, { 'Content-Type': 'text/html' }); res.write(homeHtml(cats));
            break;

        case '/styles/site.css': res.writeHead(200, { 'Content-Type': 'text/css' }); res.write(siteCss);
            break;

        case '/cats/add-breed': res.writeHead(200, { 'Content-Type': 'text/html' }); res.write(addBreed);
            break;

        case '/cats/add-cat': res.writeHead(200, { 'Content-Type': 'text/html' }); res.write(addCat);
            break;

        default: res.writeHead(404, { 'Content-Type': 'text/html' }); res.write('<h1>404 Not found</h1>');
            break;
    }

    res.end();
})

server.listen(5000, () => console.log('Server is running on port 5000..'));