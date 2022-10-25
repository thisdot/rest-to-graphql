import { getByLocation } from "@models/dotter";
import fetch from "node-fetch";
import { Location, Pagination, Resolvers } from "types/graphql";

const { REST_ENDPOINT_URL } = process.env;

export const LocationResolvers: Resolvers = {
	Location: {
		dotters: async ({ id }) => {
			const dotters = await getByLocation(Number(id));
			return dotters;
		},
	},
	Query: {
		locations: async (_, { pagination }) => {
			const { page = 1, perPage = 8 } = pagination || {};

			const res = await fetch(
				`${REST_ENDPOINT_URL}locations?page=${page}&perPage=${perPage}`
			);
			const { data, pageInfo } = (await res.json()) as {
				data: [Location];
				pageInfo: Pagination;
			};

			return {
				nodes: data,
				pagination: pageInfo,
			};
		},
		location: async (_, { id }) => {
			const res = await fetch(`${REST_ENDPOINT_URL}locations/${id}`);
			const data = (await res.json()) as Location;

			return data;
		},
	},
};
