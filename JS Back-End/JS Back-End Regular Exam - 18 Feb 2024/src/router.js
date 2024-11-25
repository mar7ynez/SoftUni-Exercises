import { Router } from "express";

const router = Router();

import { homeController } from "./controllers/homeController.js";
import { authController } from "./controllers/authController.js";
import { stoneController } from "./controllers/stoneController.js";
import { getErrorMsg } from "./utils/getErrorMessage.js";

router.use(homeController);
router.use('/user', authController);
router.use('/stones', stoneController);

router.get('*', (req, res) => {
    res.render('404');
});

router.use((error, req, res, next) => {
    if (error) {
        res.render('404', { error: getErrorMsg(error) });
    }
});

export { router };