import { gql } from "apollo-server-express";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { DotterTypeDef } from "./dotter.typeDef";
import { LocationTypeDef } from "./location.typeDef";
import { PaginationTypeDef } from "./pagination.typeDef";

export default mergeTypeDefs([
	gql`
		type Query {
			hello: String
		}
	`,
	PaginationTypeDef,
	DotterTypeDef,
	LocationTypeDef,
]);
