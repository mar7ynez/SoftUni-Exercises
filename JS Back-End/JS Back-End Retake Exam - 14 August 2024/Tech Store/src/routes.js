import express from "express";

import { router as authController } from "./controllers/authController.js";
import { router as homeController } from "./controllers/homeController.js";
import { router as productController } from "./controllers/productController.js";

const router = express.Router();

router.use(homeController);
router.use('/user', authController);
router.use('/products', productController);

router.use('*', (req, res) => {
    res.render('404');
});

export { router };