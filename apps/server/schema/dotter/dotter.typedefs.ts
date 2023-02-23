import gql from "graphql-tag";

export const dotterTypeDefs = gql`
	"""
	Dotter w/ 1:1 relations w/locaiton
	"""
	type Dotter {
		id: Int!
		firstName: String!
		lastName: String!
		title: String!
		profilePic: String!
		locationId: Int!
		createdAt: Date!
		updatedAt: Date!
		location: Location!
	}
	type Query {
		allDotters(skip: Int, take: Int): [Dotter]!
		findDotter(id: Int, name: String): [Dotter]
	}
`;
