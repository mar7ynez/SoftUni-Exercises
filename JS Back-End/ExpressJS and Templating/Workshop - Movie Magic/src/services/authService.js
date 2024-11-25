const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
require('dotenv').config();

const hashData = (data) => {
    return bcrypt.hash(data, 12);
};

const register = (newUser) => {
    return (User.findOne({ email: newUser.email }))
        .then(existingEmail => {
            if (existingEmail) {
                return Promise.reject(new Error('User already exists'));
            }

            if (newUser.password !== newUser.rePassword) {
                return Promise.reject(new Error('Passwords do not match'));
            }

            return hashData(newUser.password);
        })
        .then(hash => {
            newUser.password = hash;

            return User.create(newUser);
        })
        .catch(error => {
            throw error;
        });
};

const login = (userData) => {
    return User.findOne({ email: userData.email })
        .then(existingUser => {
            if (!existingUser) {
                return Promise.reject(new Error('Cannot find email or password'));
            }

            return bcrypt.compare(userData.password, existingUser.password)
                .then(isPassValid => ({ existingUser, isPassValid }));
        })
        .then(({ existingUser, isPassValid }) => {
            if (!isPassValid) {
                return Promise.reject(new Error('Cannot find email or password'));
            }

            const payload = {
                _id: existingUser._id,
                email: existingUser.email
            }

            return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
        })
        .catch(error => {
            throw error;
        });
}

module.exports = {
    register,
    login
}