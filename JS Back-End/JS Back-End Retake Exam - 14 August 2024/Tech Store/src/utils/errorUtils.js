import { MongooseError } from "mongoose";

export const getErrorMsg = (error) => {
    if (error instanceof MongooseError) {
        return Object.values(error.errors)[0].message;
    }

    return error.message;
}