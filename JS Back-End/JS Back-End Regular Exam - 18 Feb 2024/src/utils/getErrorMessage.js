import mongoose from "mongoose";

export const getErrorMsg = (error) => {
    if (error instanceof mongoose.Error) {
        return Object.values(error.errors).at(0).message;
    }

    return error.message;
}