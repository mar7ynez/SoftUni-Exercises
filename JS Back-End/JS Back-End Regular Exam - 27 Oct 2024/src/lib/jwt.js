import jwt from 'jsonwebtoken';

export const sign = (payload, secretOrPrivateKey, options) => {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secretOrPrivateKey, options, (error, token) => {
            if (error) {
                return reject(error);
            }

            return resolve(token);
        });
    });

    return promise;
}

export const verify = (token, secretOrPublicKey, options) => {
    const promise = new Promise((resolve, reject) => {
        jwt.verify(token, secretOrPublicKey, options, (error, decodedToken) => {
            if (error) {
                return reject(error);
            }

            return resolve(decodedToken);
        });
    });

    return promise;
}