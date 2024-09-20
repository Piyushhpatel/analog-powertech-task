import connectDb from "./db/connectDb.js";
import {app} from "./app.js";
import dotenv from "dotenv";
dotenv.config({
    path: './env',
})

const port = process.env.PORT || 8001;

connectDb().then(() => {
    app.on("error", () => {
        console.log("Error starting the server", error.message);
        throw error;
        process.exit(1);
    })

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    })
}).catch((error) => {
    console.log("Error connecting database", error.message);
    throw error;
})