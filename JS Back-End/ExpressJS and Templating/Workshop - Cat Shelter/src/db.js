const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost:27017/cat-shelter';

const connectDb = () => mongoose.connect(dbUri);

module.exports = connectDb;
