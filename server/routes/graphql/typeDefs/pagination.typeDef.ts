import { gql } from "apollo-server-express";

export const PaginationTypeDef = gql`
	input PaginationInput {
		page: Int
		perPage: Int
	}

	type Pagination {
		page: Int
		perPage: Int
		total: Int
		totalPages: Int
	}
`;
