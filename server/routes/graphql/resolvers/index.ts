import { mergeResolvers } from "@graphql-tools/merge";
import { DotterResolvers } from "./dotter.resolvers";
import { LocationResolvers } from "./location.resolvers";

export default mergeResolvers([
	{
		Query: {
			hello: () => "Hello world!",
		},
	},
	DotterResolvers,
	LocationResolvers,
]);
