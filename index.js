import dotenv from 'dotenv';
import express from 'express';
import { DBCon } from './config/db.js';
import userRoute from './routes/userRoute.js'
import tweetRoute from './routes/tweetRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config({
    path: '.env'
});

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "*",
    credentials: true
}));

app.use("/api/v1/user", userRoute)
app.use("/api/v1/tweet", tweetRoute)
app.use("/testing", (req,res) => {
    res.send("done");
});

app.listen(process.env.PORT, () => {
    DBCon();
    console.log(`Server listening at port ${process.env.PORT}`);
});