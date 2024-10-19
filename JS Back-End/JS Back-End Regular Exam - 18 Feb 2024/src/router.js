import { Router } from "express";

const router = Router();

import { homeController } from "./controllers/homeController.js";
import { authController } from "./controllers/authController.js";
import { stoneController } from "./controllers/stoneController.js";

router.use(homeController);
router.use('/user', authController);
router.use('/stones', stoneController);

router.get('*', (req, res) => {
    res.render('404');
});

export { router };