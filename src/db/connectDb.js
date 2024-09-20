import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try {
        const instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDb connected on host: ", instance.connection.host);
    } catch (error) {
        console.log("Error Connecting the database");
        console.log("Error Message", error.message);
        throw error;
    }
}

export default connectDb;