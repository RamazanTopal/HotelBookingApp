import express from "express";
import "reflect-metadata";
import dbConnect from "./db/index";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import Router from "./routes/index";
import { notFoundPage } from "./middlewares/notFoundPage";
import { errorHandle } from "./middlewares/errorHandler";

const app = express();
//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
//routes
app.use("/api/v1", Router);
app.use("*", notFoundPage);
app.use(errorHandle);

dbConnect(app);
