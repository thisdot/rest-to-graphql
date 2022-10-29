import { getByLocation } from "@models/dotter";
import { Resolvers } from "types/graphql";

export const LocationResolvers: Resolvers = {
	Location: {
		dotters: async ({ id }) => {
			const dotters = await getByLocation(Number(id));
			return dotters;
		},
	},
	Query: {
		locations: async (_, { pagination }, { dataSources }) => {
			const { page = 1, perPage = 8 } = pagination || {};
			const { data, pageInfo } = await dataSources.locationsApi.getLocations(
				page,
				perPage
			);

			return {
				nodes: data,
				pagination: pageInfo,
			};
		},
		location: async (_, { id }, { dataSources }) => {
			const location = await dataSources.locationsApi.getLocation(id);
			return location;
		},
	},
};
