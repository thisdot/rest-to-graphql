import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { DateTypeDefinition } from "graphql-scalars";

/**
 * Internal Schema Types & Resolvers
 */
import { healthcheckResolvers, healthcheckTypeDefs } from "./healthcheck";
import { locationTypeDefs, locationResolvers } from "./location";
import { dotterTypeDefs, dotterResolvers } from "./dotter";

const typeDefs = mergeTypeDefs([
	DateTypeDefinition,
	healthcheckTypeDefs,
	locationTypeDefs,
	dotterTypeDefs,
]);

const resolvers = mergeResolvers([
	healthcheckResolvers,
	locationResolvers,
	dotterResolvers,
]);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
