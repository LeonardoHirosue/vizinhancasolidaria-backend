import "reflect-metadata";
import express from "express";
import "express-async-errors";

import "@shared/container";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import createConnection from "@shared/infra/typeorm";

import { router } from "./routes";

createConnection();
const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen(3333, () => console.log("Server is running"));