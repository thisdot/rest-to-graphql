import { create, destroy, get, getAll, update } from "@models/dotter";
import { get as getLocation } from "@models/location";
import { Dotter, Resolvers } from "types/graphql";

type RealDotter = Dotter & { locationId?: Number };

export const DotterResolvers: Resolvers = {
	Dotter: {
		location: async ({ locationId }: RealDotter) => {
			const location = await getLocation(Number(locationId));
			return location;
		},
	},
	Query: {
		dotters: async (_, { pagination }) => {
			const page = pagination?.page ?? 1;
			const perPage = pagination?.perPage ?? 8;
			const { dotters, count } = await getAll({
				perPage,
				page,
			});

			return {
				nodes: dotters,
				pagination: {
					page,
					perPage,
					total: count,
					totalPages: Math.ceil(count / perPage),
				},
			};
		},
		dotter: async (_, { id }) => {
			const dotter = await get(Number(id));
			return dotter;
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
				city: location.city,
				state: location.state || undefined,
				country: location.country,
			};
			const newDotter = await create(remappedData);
			return newDotter;
		},
		updateDotter: async (_, { id, data }) => {
			const updatedDotter = await update(Number(id), data);
			return updatedDotter;
		},
		deleteDotter: async (_, { id }) => {
			const deletedDotter = await destroy(Number(id));
			return deletedDotter;
		},
	},
};
