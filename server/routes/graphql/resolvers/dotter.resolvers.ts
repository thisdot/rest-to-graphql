import fetch from "node-fetch";
import { Dotter, Location, Pagination, Resolvers } from "types/graphql";

const { REST_ENDPOINT_URL } = process.env;

type RealDotter = Dotter & { locationId?: Number };

export const DotterResolvers: Resolvers = {
	Dotter: {
		location: async ({ locationId }: RealDotter) => {
			const res = await fetch(`${REST_ENDPOINT_URL}locations/${locationId}`);
			const data = (await res.json()) as Location;
			return data;
		},
	},
	Query: {
		dotters: async (_, { pagination }) => {
			const { page = 1, perPage = 8 } = pagination || {};

			const res = await fetch(
				`${REST_ENDPOINT_URL}dotters?page=${page}&perPage=${perPage}`
			);
			const { data, pageInfo } = (await res.json()) as {
				data: [Dotter];
				pageInfo: Pagination;
			};

			return {
				nodes: data,
				pagination: pageInfo,
			};
		},
		dotter: async (_, { id }) => {
			const res = await fetch(`${REST_ENDPOINT_URL}dotters/${id}`);
			const data = (await res.json()) as Dotter;

			return data;
		},
	},
	Mutation: {
		createDotter: async (_, { data }) => {
			const { firstName, lastName, title, profilePic, location } = data;
			const remappedData = {
				firstName,
				lastName,
				title,
				profilePic,
				...location,
			};
			const res = await fetch(`${REST_ENDPOINT_URL}dotters`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(remappedData),
			});
			const newDotter = (await res.json()) as Dotter;
			return newDotter;
		},
		updateDotter: async (_, { id, data }) => {
			const res = await fetch(`${REST_ENDPOINT_URL}dotters/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			const updatedDotter = (await res.json()) as Dotter;
			return updatedDotter;
		},
		deleteDotter: async (_, { id }) => {
			const res = await fetch(`${REST_ENDPOINT_URL}dotters/${id}`, {
				method: "DELETE",
			});
			const deletedDotter = (await res.json()) as Dotter;
			return deletedDotter;
		},
	},
};
