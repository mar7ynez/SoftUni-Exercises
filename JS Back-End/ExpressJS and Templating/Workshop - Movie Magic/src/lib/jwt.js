const jwt = require('jsonwebtoken');

const sign = (payload, secretOrPrivateKey, options) => {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secretOrPrivateKey, options, (error, token) => {
            if (error) {
                return reject(error);
            }

            return resolve(token);
        });
    })

    return promise;
}

module.exports = {
    sign
}; 