import express from 'express';
import path from 'path';
import { auth } from '../middlewares/authMiddlewares.js';
import cookieParser from 'cookie-parser';

export const configExpress = (app) => {
    app.use(express.static(path.resolve('public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth);
}