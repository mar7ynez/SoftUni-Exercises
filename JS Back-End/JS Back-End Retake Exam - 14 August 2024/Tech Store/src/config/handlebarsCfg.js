import handlebars from "express-handlebars";
import path from "path";

export const configHandlebars = (app) => {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        defaultLayout: 'mainLayout.hbs'
    }))
    app.set('view engine', 'hbs');
    app.set('views', path.resolve('src', 'views'));
}