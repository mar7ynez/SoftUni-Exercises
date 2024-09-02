const http = require('http');
const fs = require('fs').promises;
const querystring = require('querystring');

const { saveCat, generateCatCards, getCatById, deleteCat, populateTempForm, editCatData, getCats } = require('./services/catService');
const { saveBreed, updateBreedOptions } = require('./services/breedService');
const { handleAndSavePostData } = require('./services/postDataService');

const viewPaths = {
    home: './views/index.html',
    addBreed: './views/addBreed.html',
    addCat: './views/addCat.html',
    edit: './views/editCat.html',
    delete: './views/catShelter.html',
    siteCss: './styles/site.css',
    catPart: './partials/cat.html',
    breedPart: './partials/breed.html',
    addCatPart: './partials/addCatOptions.html'
}

const readFile = (path) => {
    return fs.readFile(path, { encoding: 'utf-8' })
        .then(data => data)
        .catch(error => {
            console.error(`Read data errror: ${error.message}`)
        });
}

const renderView = (res, path, contentType) => {
    readFile(path, { encoding: 'utf-8' })
        .then(data => {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
            res.end();
        })
        .catch(error => {
            console.error(`Error rendering page: ${error.message}`);
        });
}


const server = http.createServer((req, res) => {
    let body = [];

    const url = new URL(req.url, `http://${req.headers.host}`);
    const catId = url.searchParams.get('catId');

    switch (url.pathname) {
        case '/':
            readFile(viewPaths.home)
                .then(data => {
                    return generateCatCards(readFile(viewPaths.catPart), getCats())
                        .then(catCards => data.replace(`{{cats}}`, catCards));
                })
                .then(finalHtml => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(finalHtml);
                    res.end();
                });
            break;

        case '/styles/site.css':
            renderView(res, viewPaths.siteCss, 'text/css');
            break;

        case '/cats/add-breed':
            renderView(res, viewPaths.addBreed, 'text/html');

            readFile(viewPaths.addCatPart)
                .then(addCatHtml => {
                    return updateBreedOptions(readFile(viewPaths.breedPart))
                        .then(options => addCatHtml.replace('{{options}}', options.join('\n')));
                })
                .then(actualOptions => {
                    fs.writeFile(viewPaths.addCat, actualOptions);

                    res.end();
                });
            break;

        case '/cats/add-cat':
            renderView(res, viewPaths.addCat, 'text/html');
            break;

        case '/cats/add':
            handleAndSavePostData(req, res, saveCat, 302, { 'location': '/' }, body);
            break;

        case '/cats/breed':
            handleAndSavePostData(req, res, saveBreed, 302, { 'location': '/cats/add-breed' }, body);
            break;

        case '/cats/shelter':
            if (catId) {
                getCatById(catId)
                    .then(catData => {
                        readFile(viewPaths.delete)
                            .then(catShelterPart => {
                                res.writeHead(200, { 'Content-Type': 'text/html' });
                                res.write(populateTempForm(catData, catShelterPart));
                                res.end();
                            });
                    });
            }
            break;

        case '/cats/delete':
            if (catId) {
                deleteCat(catId)
                    .then(() => {
                        res.writeHead(301, { 'Location': '/' });
                        res.end();
                    });
            }
            break;

        case '/cats/edit':
            if (catId) {
                getCatById(catId)
                    .then(catData => {
                        readFile(viewPaths.edit)
                            .then(editTemp => {
                                return populateTempForm(catData, editTemp);
                            })
                            .then(populatedTemplate => {
                                return updateBreedOptions(readFile(viewPaths.breedPart))
                                    .then(options => populatedTemplate.replace('{{options}}', options.join('\n')));
                            })
                            .then(finalTemp => {
                                res.writeHead(200, { 'Content-Type': 'text/html' });
                                res.write(finalTemp);
                                res.end();
                            });
                    });
            }
            break;

        case '/edit':
            handleAndSavePostData(req, res, editCatData, 301, { 'Location': '/' }, body, catId);
            break;

        case '/search':
            const searchInput = url.searchParams.get('searchTerm').toLowerCase();

            getCats()
                .then(allCatsData => {
                    return allCatsData.filter(cat => cat.breed.toLowerCase().includes(searchInput));
                })
                .then(filteredBySearch => {
                    return generateCatCards(readFile(viewPaths.catPart), filteredBySearch);
                })
                .then(populatedTemplate => {
                    return readFile(viewPaths.home)
                        .then(homeHtml => homeHtml.replace('{{cats}}', populatedTemplate));
                })
                .then(finalHtml => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(finalHtml);
                    res.end();
                })
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1>');
            res.end();
            break;
    }
});

server.listen(5000, () => console.log('Server is running on port 5000...'));