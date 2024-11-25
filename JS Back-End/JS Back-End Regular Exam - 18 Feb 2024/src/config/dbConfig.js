import mongoose from 'mongoose';

const dbUri = 'mongodb://localhost:27017/earth-treasure-vaul';

export const connectDb = async () => {
    try {
        await mongoose.connect(dbUri);

        console.log('DB Connected!');
    }
    catch (error) {
        console.log('Error connecting DB!\n', error);
    }
}