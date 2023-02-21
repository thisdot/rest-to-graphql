import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.development" });
import express, { Application } from "express";
import { createYoga, createSchema } from "graphql-yoga";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";

const schema = createSchema({
	typeDefs: /* GraphQL */ `
		type Query {
			hello: String!
		}
	`,
	resolvers: {
		Query: {
			hello: () => "HELLO",
		},
	},
});

const app: Application = express();
const yoga = createYoga({ schema });

app.use(bodyParser.json());
app.use(cors());
// Bind GraphQL Yoga to `/graphql` endpoint
app.use("/graphql", yoga);
app.use("/", routes);

export default app;
