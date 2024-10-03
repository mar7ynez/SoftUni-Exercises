import express from "express";
import { router as authController } from "./controllers/authController.js";
import { router as homeController } from "./controllers/homeController.js";

const router = express.Router();

router.use(homeController);
router.use('/user', authController);

export { router };