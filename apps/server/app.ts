import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.development" });
import express, { Application } from "express";
import { createYoga } from "graphql-yoga";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";
import { schema } from "./schema";

const app: Application = express();
const yoga = createYoga({ schema });

app.use(bodyParser.json());
app.use(cors());
// Bind GraphQL Yoga to `/graphql` endpoint
app.use("/graphql", yoga);
app.use("/", routes);

export { app, yoga };
