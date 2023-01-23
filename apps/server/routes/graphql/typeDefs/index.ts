import { gql } from "apollo-server-express";
import { mergeTypeDefs } from "@graphql-tools/merge";

export default mergeTypeDefs([
	gql`
		type Query {
			hello: String
		}
	`,
]);
