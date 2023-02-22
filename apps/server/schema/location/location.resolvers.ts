import { GraphQLError } from "graphql";
import { getAll, get } from "@models/location";
import { ValidationError } from "@utils/errors";
export const locationResolvers = {
	Query: {
		allLocations: async () => {
			try {
				const { locations } = await getAll({
					perPage: 6,
					page: 1,
					includeDotters: false, //TODO
				});

				return locations;
			} catch (err) {
				if (err instanceof ValidationError) {
					return Promise.reject(new GraphQLError("Wrong arguments"));
				}
				return Promise.reject(err);
			}
		},
	},
};
