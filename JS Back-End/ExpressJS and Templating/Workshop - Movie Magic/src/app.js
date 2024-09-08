const express = require('express');

const configExpress = require('./config/cfgExpress');
const configHandlebars = require('./config/cfgHandlebars');

const routes = require('./routes');

const app = express();
const port = 5000;

configExpress(app);
configHandlebars(app);

app.use(routes);

app.listen(port, () => console.log(`The server is running on port ${port}...`));