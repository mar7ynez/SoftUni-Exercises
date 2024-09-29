const jwt = require('../lib/jwt');
require('dotenv').config();

const auth = (req, res, next) => {
    const token = req.cookies['user'];

    if (!token) {
        return next();
    }

    jwt.verify(token, process.env.SECRET_KEY)
        .then(decodedToken => {
            req.user = decodedToken;
            res.locals.isAuthenticated = true;

            next();
        })
        .catch(error => {
            res.clearCookie('user')
            res.redirect('/user/login');
        });
}

const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/user/login');
    }

    next();
}

module.exports = {
    auth,
    isAuth
};