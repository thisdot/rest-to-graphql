import { gql } from "apollo-server-express";

export const LocationTypeDef = gql`
	input CreateLocationInput {
		city: String!
		state: String
		country: String!
	}

	type Location {
		id: ID!
		city: String @deprecated(reason: "Use displayName instead")
		state: String @deprecated(reason: "Use displayName instead")
		country: String @deprecated(reason: "Use displayName instead")
		displayName: String
		dotters: [Dotter]
	}

	type LocationConnection {
		nodes: [Location]
		pagination: Pagination
	}

	type Query {
		locations(pagination: PaginationInput): LocationConnection
		location(id: ID!): Location
	}
`;
