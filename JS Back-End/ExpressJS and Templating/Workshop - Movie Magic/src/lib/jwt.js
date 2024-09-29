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

jwt.verify
const verify = (token, secretOrPublicKey, options) => {
    const promise = new Promise((resolve, reject) => {
        jwt.verify(token, secretOrPublicKey, options, (error, decodedToken) => {
            if (error) {
                return reject(error);
            }

            return resolve(decodedToken);
        });
    })

    return promise;
}

module.exports = {
    sign,
    verify
}; 