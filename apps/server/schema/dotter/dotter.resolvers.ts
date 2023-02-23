import { getAllDotters, create, get, update, destroy } from "@models/dotter";
import { ValidationError } from "@utils/errors";
import { GraphQLError } from "graphql";

export const dotterResolvers = {
	Query: {
		allDotters: async (_, { skip, take }: { skip: number; take: number }) => {
			try {
				const dotters = await getAllDotters({
					skip,
					take,
				});
				return dotters;
			} catch (err) {
				console.log(err);
				if (err instanceof ValidationError) {
					throw new GraphQLError(
						`No dotters found.`,
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
	},
};
