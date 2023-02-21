import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { healthcheckResolvers, healthcheckTypeDefs } from "./healthcheck";

const typeDefs = mergeTypeDefs([healthcheckTypeDefs]);

const resolvers = mergeResolvers([healthcheckResolvers]);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
