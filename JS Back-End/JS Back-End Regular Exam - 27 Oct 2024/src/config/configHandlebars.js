import handlebars from 'express-handlebars';
import path from 'path';

console.log(path.resolve('src', 'views'))

export const configHandlebars = (app) => {
    app.engine('hbs', handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'mainLayout.hbs',
        helpers: {
            eq: (arg1, arg2) => arg1 === arg2,
        }
    }));
    app.set('view engine', '.hbs');
    app.set('views', path.resolve('src', 'views'));
}