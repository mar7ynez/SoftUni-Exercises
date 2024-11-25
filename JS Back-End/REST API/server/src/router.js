import express from "express";

import { router as productController } from "./controllers/productController.js";
import { router as userController } from "./controllers/userController.js";

const router = express.Router();

router.use('/furnitures', productController);
router.use('/users', userController);

export { router };