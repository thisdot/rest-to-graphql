import { request, gql } from "graphql-request";

const GRAPHQL_ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}graphql`;

export const getDotters = async (page = 1, perPage = 8) => {
	const operation = gql`
		query DottersQuery($pagination: PaginationInput) {
			dotters(pagination: $pagination) {
				nodes {
					id
					firstName
					lastName
					title
					profilePic
					location {
						id
						displayName
					}
				}
				pagination {
					page
					totalPages
				}
			}
		}
	`;
	const { dotters } = await request(GRAPHQL_ENDPOINT, operation, {
		pagination: {
			page,
			perPage,
		},
	});

	return dotters;
};

export const createDotter = async (data) => {
	const operation = gql`
		mutation CreateDotterMutation($data: CreateDotterInput!) {
			createDotter(data: $data) {
				id
			}
		}
	`;

	const { createDotter: newDotter } = await request(
		GRAPHQL_ENDPOINT,
		operation,
		{
			data: {
				firstName: data.firstName,
				lastName: data.lastName,
				title: data.title,
				profilePic: data.profilePic,
				location: {
					city: data.city,
					state: data.state,
					country: data.country,
				},
			},
		}
	);

	return newDotter;
};

export const getDotterById = async (id) => {
	const operation = gql`
		query DotterQuery($id: ID!) {
			dotter(id: $id) {
				id
				firstName
				lastName
				title
				profilePic
				location {
					id
					displayName
				}
			}
		}
	`;
	const { dotter } = await request(GRAPHQL_ENDPOINT, operation, {
		id,
	});
	return dotter;
};

export const updateDotterById = async (id, data) => {
	const operation = gql`
		mutation UpdateDotterMutation($id: ID!, $data: UpdateDotterInput!) {
			updateDotter(id: $id, data: $data) {
				id
			}
		}
	`;

	await request(GRAPHQL_ENDPOINT, operation, {
		id,
		data: {
			firstName: data.firstName,
			lastName: data.lastName,
			title: data.title,
			profilePic: data.profilePic,
		},
	});
};

export const deleteDotterById = async (id) => {
	const operation = gql`
		mutation DotterMutation($id: ID!) {
			deleteDotter(id: $id) {
				id
			}
		}
	`;

	await request(GRAPHQL_ENDPOINT, operation, {
		id,
	});
};
