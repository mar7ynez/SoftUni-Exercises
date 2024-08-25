const http = require('http');
const homeHtml = require('./views/homeView.html');
const siteCss = require('./views/site.css');
const addBreed = require('./views/addBreed.html');
const addCat = require('./views/addCat.html');
const { getCats } = require('./cats');
const { saveCat } = require('./cats');
const formidable = require('formidable');

const server = http.createServer((req, res) => {
    const cats = getCats();

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(homeHtml(cats));
            res.end();
            break;

        case '/styles/site.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(siteCss);
            res.end();
            break;

        case '/cats/add-breed':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(addBreed);
            res.end();
            break;

        case '/cats/add-cat':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(addCat);
            res.end();
            break;

        case '/cats/add':
            if (req.method === 'POST') {
                const form = new formidable.IncomingForm(); // Initialize Formidable

                form.parse(req, (err, fields, files) => {
                    if (err) {
                        res.writeHead(400, { 'Content-Type': 'text/html' });
                        res.write('<h1>Error processing the form</h1>');
                        res.end();
                        return;
                    }

                    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
                    const breed = Array.isArray(fields.breed) ? fields.breed[0] : fields.breed;
                    const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;
                    const imageUrl = Array.isArray(fields.imageUrl) ? fields.imageUrl[0] : fields.imageUrl;

                    const newCat = {
                        id: Date.now(),
                        imageUrl: imageUrl,
                        name: name,
                        breed: breed,
                        description: description
                    };

                    saveCat(newCat);

                    res.writeHead(302, { Location: '/' });
                    res.end();
                });
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