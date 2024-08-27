const http = require('http');
const fs = require('fs').promises;
const querystring = require('querystring');

const { getCats } = require('./cats');
const { saveCat } = require('./cats');
const { generateCatCards } = require('./cats');

const viewPaths = {
    home: './views/index.html',
    addBreed: './views/addBreed.html',
    addCat: './views/addCat.html',
    edit: './views/editCat.html',
    siteCss: './styles/site.css',
    catPart: './partials/cat.html'
}

const renderView = (res, path, contentType) => {
    fs.readFile(path, { encoding: 'utf-8' })
        .then(data => {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
            res.end();
        })
        .catch(error => {
            console.error(error);
        });
}

const readFile = (path) => {
    return fs.readFile(path, { encoding: 'utf-8' });
}

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            readFile(viewPaths.home, { encoding: 'utf-8' })
                .then(data => {
                    return generateCatCards(readFile(viewPaths.catPart), getCats())
                        .then(catCards => data.replace(`{{cats}}`, catCards));
                })
                .then(finalHtml => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(finalHtml);
                    res.end();
                })
            break;

        case '/styles/site.css':
            renderView(res, viewPaths.siteCss, 'text/css');
            break;

        case '/cats/add-breed':
            renderView(res, viewPaths.addBreed, 'text/html');
            break;

        case '/cats/add-cat':
            renderView(res, viewPaths.addCat, 'text/html');
            break;

        case '/cats/add':
            if (req.method === 'POST') {
                let body = [];

                req.on('data', (chunk) => body.push(chunk));

                req.on('close', () => {
                    const parsedData = querystring.parse(body.join(''));

                    saveCat(parsedData);

                    res.writeHead(301, { 'location': '/' });
                    res.end();
                })
            }
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1>');
            res.end();
            break;
    }
});

server.listen(5000, () => console.log('Server is running on port 5000...'));