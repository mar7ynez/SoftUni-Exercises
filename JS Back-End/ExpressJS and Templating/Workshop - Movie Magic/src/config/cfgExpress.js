const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const authMiddleware = require('../middlewares/authMiddleware');

const configExpress = (app) => {
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(authMiddleware.auth);
}

module.exports = configExpress;