import { Dotter, Resolvers } from "types/graphql";

type RealDotter = Dotter & { locationId?: Number };

export const DotterResolvers: Resolvers = {
	Dotter: {
		location: async ({ locationId }: RealDotter, _, { dataSources }) => {
			const location = await dataSources.locationsApi.getLocation(locationId);
			return location;
		},
	},
	Query: {
		dotters: async (_, { pagination }, { dataSources }) => {
			const { page = 1, perPage = 8 } = pagination || {};

			const { data, pageInfo } = await dataSources.dottersApi.getDotters(
				page,
				perPage
			);

			return {
				nodes: data,
				pagination: pageInfo,
			};
		},
		dotter: async (_, { id }, { dataSources }) => {
			const dotter = await dataSources.dottersApi.getDotter(id);
			return dotter;
		},
	},
	Mutation: {
		createDotter: async (_, { data }, { dataSources }) => {
			const { firstName, lastName, title, profilePic, location } = data;
			const remappedData = {
				firstName,
				lastName,
				title,
				profilePic,
				...location,
			};
			const newDotter = await dataSources.dottersApi.createDotter(remappedData);

			return newDotter;
		},
		updateDotter: async (_, { id, data }, { dataSources }) => {
			const updatedDotter = await dataSources.dottersApi.updateDotter(id, data);
			return updatedDotter;
		},
		deleteDotter: async (_, { id }, { dataSources }) => {
			const deletedDotter = await dataSources.dottersApi.deleteDotter(id);
			return deletedDotter;
		},
	},
};
