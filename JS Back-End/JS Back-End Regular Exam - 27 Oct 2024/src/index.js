import express from 'express';
import { configExpress } from './config/configExpress.js';
import { configHandlebars } from './config/configHandlebars.js';
import { connectDb } from './config/configDb.js';
import { router as routes } from './router.js';

const app = express();
const port = 3000;

configExpress(app);
configHandlebars(app);

app.use(routes);

app.listen(port, () => {
    connectDb();

    console.log(`Server is running on port ${port}...`)
});