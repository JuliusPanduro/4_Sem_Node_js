import express from 'express';
const app = express();

app.use(express.json());

import cors from "cors";
app.use(cors());

import helmet from "helmet";
app.use(helmet());

import router from "./server/routers/userRouter.js";
app.use(router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log("Server is running on port:",PORT);
});