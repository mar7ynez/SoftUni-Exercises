const express = require('express');
const mongoose = require('mongoose');
const configExpress = require('./config/cfgExpress');
const configHandlebars = require('./config/cfgHandlebars');

const routes = require('./routes');

const app = express();
const port = 5000;

configExpress(app);
configHandlebars(app);

app.use(routes);

mongoose.connect('mongodb://localhost:27017/magic-movies')
    .then(() => {
        console.log('DB Connected!');

        app.listen(port, () => console.log(`The server is running on port ${port}...`));
    })
    .catch(error => console.log(`Cannot connect to DB: ${error.message}`));