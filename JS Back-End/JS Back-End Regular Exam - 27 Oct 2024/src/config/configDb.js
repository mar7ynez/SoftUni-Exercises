import mongoose from "mongoose";

const dbUri = 'mongodb://localhost:27017/cosmic-explorer'

export const connectDb = async () => {
    try {
        await mongoose.connect(dbUri);

        console.log('Database connected!');
    } catch (error) {
        console.log('Error connecting database\n', error);
    }
}