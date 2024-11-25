import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { auth } from '../middlewares/authMiddleware.js';

export const configExpress = (app) => {
    app.use(express.static(path.resolve('public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth);
}