import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import bodyParser from "body-parser";
import routes, { typeDefs, resolvers } from "./routes";

async function main() {
	const app = express();
	const PORT = process.env.PORT ?? 4000;

	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();
	server.applyMiddleware({ app });

	app.use(bodyParser.json());
	app.use(cors());
	app.use("/", routes);

	app.listen(PORT, () => {
		console.log(`🚀 Server ready at: http://localhost:${PORT}`);
	});
}

main();
