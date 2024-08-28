const querystring = require('querystring');

const parseQueryData = (data) => {
    const parsedData = querystring.parse(data);

    return parsedData;
}

const collectChunks = (chunk, body) => {
    body.push(chunk);
}

const handleAndSavePostData = (req, res, saveFunction, statusCode, header, body) => {
    if (req.method === 'POST') {
        req.on('data', (chunk) => collectChunks(chunk, body));

        req.on('close', () => {
            saveFunction(parseQueryData(body.join('')));

            res.writeHead(statusCode, header)
            res.end();
        });
    }
}

module.exports = {
    handleAndSavePostData
}