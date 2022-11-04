import { gql } from "apollo-server-express";

export const DotterTypeDef = gql`
	input CreateDotterInput {
		firstName: String!
		lastName: String!
		title: String!
		profilePic: String!
		location: CreateLocationInput!
	}

	input UpdateDotterInput {
		firstName: String!
		lastName: String!
		title: String!
		profilePic: String!
	}

	type Dotter {
		id: ID!
		profilePic: String
		firstName: String
		lastName: String
		location: Location
		title: String
	}

	type DotterConnection {
		nodes: [Dotter]
		pagination: Pagination
	}

	type Query {
		dotters(pagination: PaginationInput): DotterConnection
		dotter(id: ID!): Dotter
	}

	type Mutation {
		createDotter(data: CreateDotterInput!): Dotter
		updateDotter(id: ID!, data: UpdateDotterInput!): Dotter
		deleteDotter(id: ID!): Dotter
	}
`;
