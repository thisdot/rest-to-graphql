import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.development" });
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);

export default app;
