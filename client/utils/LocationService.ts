import { request, gql } from "graphql-request";

const GRAPHQL_ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}graphql`;

export const getLocations = async () => {
	const operation = gql`
		query LocationsQuery {
			locations {
				nodes {
					id
					city
					state
					country
					dotters {
						id
					}
				}
			}
		}
	`;
	const { locations } = await request(GRAPHQL_ENDPOINT, operation, {});

	return locations;
};

export const getLocationById = async (id) => {
	const operation = gql`
		query LocationQuery($id: ID!) {
			location(id: $id) {
				id
				city
				state
				country
				dotters {
					id
					firstName
					lastName
					profilePic
					title
				}
			}
		}
	`;
	const { location } = await request(GRAPHQL_ENDPOINT, operation, { id });

	return location;
};
