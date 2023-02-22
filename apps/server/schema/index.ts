import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { DateTypeDefinition } from "graphql-scalars";

/**
 * Internal Schema Types & Resolvers
 */
import { healthcheckResolvers, healthcheckTypeDefs } from "./healthcheck";
import { locationTypeDefs, locationResolvers } from "./location";

const typeDefs = mergeTypeDefs([
	DateTypeDefinition,
	healthcheckTypeDefs,
	locationTypeDefs,
]);

const resolvers = mergeResolvers([healthcheckResolvers, locationResolvers]);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
