import express from 'express';
import cors from "cors";
import * as authMiddleware from '../middlewares/authMiddleware.js';

export const configExpress = (app) => {
    app.use(cors({
        origin: 'http://localhost:3000'
    }));
    app.use(express.json());
    app.use(authMiddleware.auth);
}