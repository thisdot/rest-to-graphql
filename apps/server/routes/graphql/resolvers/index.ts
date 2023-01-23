import { mergeResolvers } from "@graphql-tools/merge";

export default mergeResolvers([
	{
		Query: {
			hello: () => "Hello world!",
		},
	},
]);
