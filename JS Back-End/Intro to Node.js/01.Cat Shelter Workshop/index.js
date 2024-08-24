const http = require('http');
const homeHtml = require('./views/homeView.html');
const { parse } = require('querystring');
const siteCss = require('./views/site.css');
const addBreed = require('./views/addBreed.html');
const addCat = require('./views/addCat.html');
const { getCats } = require('./cats');
const { saveCat } = require('./cats');

const server = http.createServer((req, res) => {

    const cats = getCats();

    switch (req.url) {
        case '/': res.writeHead(200, { 'Content-Type': 'text/html' }); res.write(homeHtml(cats));
            break;

        case '/styles/site.css': res.writeHead(200, { 'Content-Type': 'text/css' }); res.write(siteCss);
            break;

        case '/cats/add-breed': res.writeHead(200, { 'Content-Type': 'text/html' }); res.write(addBreed);
            break;

        case '/cats/add-cat': res.writeHead(200, { 'Content-Type': 'text/html' }); res.write(addCat);
            break;

        case '/cats/add':
            if (req.method === 'POST') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    const formData = parse(body);
                    console.log(formData);

                    const newCat = {
                        id: Date.now(),
                        imageUrl: formData.upload || 'default_image_url.jpg',
                        name: formData.name,
                        breed: formData.breed,
                        description: formData.description
                    };

                    saveCat(newCat);
                });
            }
            break;

        default: res.writeHead(404, { 'Content-Type': 'text/html' }); res.write('<h1>404 Not found</h1>');
            break;
    }

    res.end();
})

server.listen(5000, () => console.log('Server is running on port 5000..'));