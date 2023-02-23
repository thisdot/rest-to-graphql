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
					throw new GraphQLError(
						`No locations found.`,
						// error extensions
						{
							extensions: {
								http: {
									status: 400,
								},
							},
						}
					);
				}
				throw new GraphQLError(
					`${err}`,
					// error extensions
					{
						extensions: {
							http: {
								status: 500,
							},
						},
					}
				);
			}
		},
		findLocation: async (_: any, { id }: { id: number }) => {
			try {
				const location = await get(id, {});

				if (!location) {
					throw new GraphQLError(
						`No location by ${id} found.`,
						// error extensions
						{
							extensions: {
								http: {
									status: 400,
								},
							},
						}
					);
				}
				return location;
			} catch (err) {
				throw new GraphQLError(
					`${err}`,
					// error extensions
					{
						extensions: {
							http: {
								status: 500,
							},
						},
					}
				);
			}
		},
	},
};
