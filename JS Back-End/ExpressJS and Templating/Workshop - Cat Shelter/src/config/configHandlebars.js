const handlebars = require('express-handlebars');
const path = require('path');

const configHandlebars = (app) => {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        defaultLayout: 'mainLayout.hbs'
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'));
}

module.exports = configHandlebars;