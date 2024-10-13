import express from "express";
import { configExpress } from "./config/expressCfg.js";
import { router as routes } from "./router.js";
import { connectDb } from "./config/dbCfg.js";

const app = express();
const port = 3030;

configExpress(app);

app.use(routes);

app.listen(port, () => {
    console.log(`Server is listening on ${port}...`);
    connectDb();
});