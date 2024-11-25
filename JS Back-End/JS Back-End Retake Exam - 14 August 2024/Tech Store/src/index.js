import express from 'express';
import { configExpress } from './config/expressCfg.js';
import { configHandlebars } from './config/handlebarsCfg.js';
import { configDb } from './config/dbCfg.js';
import { router as routes } from './routes.js';

const app = express();
const port = 3000;

configHandlebars(app);
configExpress(app);
configDb(app, port);

app.use(routes);