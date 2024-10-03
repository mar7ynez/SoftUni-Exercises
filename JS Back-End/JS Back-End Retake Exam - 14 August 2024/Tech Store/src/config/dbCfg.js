import mongoose from "mongoose";

const dbUri = 'mongodb://localhost:27017/tech-store'

export const configDb = async (app, port) => {
    try {
        await mongoose.connect(dbUri);

        console.log('DB Connected!');

        app.listen(port, () => console.log(`Server is running on port ${port}..`))
    }
    catch (error) {
        console.log('Error connecting DB\n', error);
    }
};