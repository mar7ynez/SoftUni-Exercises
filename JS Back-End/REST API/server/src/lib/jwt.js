import jsonwebtoken from 'jsonwebtoken';

const sign = (payload, secretOrPrivateKey, options) => {
    const promise = new Promise((resolve, reject) => {
        jsonwebtoken.sign(payload, secretOrPrivateKey, options, (error, token) => {
            if (error) {
                return reject(error);
            }

            return resolve(token);
        });
    });

    return promise;
}

const verify = (token, secretOrPublicKey, options) => {
    const promise = new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, secretOrPublicKey, options, (error, decodedToken) => {
            if (error) {
                return reject(error);
            }

            return resolve(decodedToken);
        });
    })

    return promise;
}

export { sign, verify };