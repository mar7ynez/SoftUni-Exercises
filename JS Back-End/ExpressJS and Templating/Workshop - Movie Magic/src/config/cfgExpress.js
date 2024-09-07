const express = require('express');
const path = require('path');

const configExpress = (app) => {
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(express.urlencoded({ extended: false }));
}

module.exports = configExpress;