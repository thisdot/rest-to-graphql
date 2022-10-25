import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "http://localhost:4000/graphql",
	generates: {
		"types/graphql.ts": {
			plugins: ["typescript", "typescript-resolvers"],
			config: {
				scalars: {
					ID: "string | number",
				},
			},
		},
	},
};

export default config;
