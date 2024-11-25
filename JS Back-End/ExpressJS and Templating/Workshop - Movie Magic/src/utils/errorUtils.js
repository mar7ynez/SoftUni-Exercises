const mongoose = require('mongoose');

const getErrorMsg = (error) => {
    let message = '';

    if (error instanceof mongoose.MongooseError) {
        return message = Object.values(error.errors)[0].message;
    }

    return message = error.message;
}

module.exports = getErrorMsg;