import gql from "graphql-tag";

export const healthcheckTypeDefs = gql`
	type Query {
		"A simple hello"
		healthcheck: String!
	}
`;
