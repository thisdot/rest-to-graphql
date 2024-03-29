import {
	getAllDotters,
	create,
	getDotter,
	update,
	destroy,
} from "@models/dotter";
import { ValidationError } from "@utils/errors";
import { GraphQLError } from "graphql";

export const dotterResolvers = {
	Query: {
		allDotters: async (
			_: any,
			{ skip, take }: { skip: number; take: number }
		) => {
			try {
				const dotters = await getAllDotters({
					skip,
					take,
				});
				return dotters;
			} catch (err) {
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
		findDotter: async (
			_: any,
			{ id, name }: { id?: number; name?: string }
		) => {
			try {
				const dotters = await getDotter({ id, name });
				return dotters;
			} catch (err) {
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
	Mutation: {
		createDotter: async (
			parent: unknown,
			args: {
				dotter: {
					firstName: string;
					lastName: string;
					title: string;
					profilePic: string;
					city: string;
					state: string;
					country: string;
				};
			}
		) => {
			const dotter = await create(args.dotter);
			return dotter;
		},
		updateDotter: async (
			parent: unknown,
			args: {
				id: number;
				dotter: {
					firstName: string;
					lastName: string;
					title: string;
					profilePic: string;
					city: string;
					state: string;
					country: string;
				};
			}
		) => {
			const updatedDotter = await update(args.id, args.dotter);
			return updatedDotter;
		},
		deleteDotter: async (parent: unknown, args: { id: number }) => {
			const removedDotter = await destroy(args.id);
			return removedDotter;
		},
	},
};
