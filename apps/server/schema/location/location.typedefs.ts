import gql from "graphql-tag";

export const locationTypeDefs = gql`
	"""
	Location of a Dotter
	"""
	type Location {
		id: Int!
		city: String!
		state: String
		country: String!
		createdAt: Date!
		updatedAt: Date!
	}
	type Query {
		"A list of dotter locations"
		allLocations: [Location!]
		"Specific location by ID"
		findLocation(id: Int!): Location
	}
`;
