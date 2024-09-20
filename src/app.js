import express from "express";
import cors from "cors";
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb",
}));

app.get("/", (req, res) => {
    res.send('<center><h2>Analog Powertech Engineering Backend Task</h2></center>')
});

//Routes
import ticketRouter from "./routes/ticket.route.js";

app.use('/api/v1/tickets', ticketRouter);

export {app};