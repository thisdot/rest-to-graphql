import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const isDarkModeVar = makeVar(true);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isDarkMode: {
          read() {
            return isDarkModeVar();
          },
        },
        character: {
          read(_, { args, toReference }) {
            return toReference({
              __typename: 'Character',
              id: args.id,
            });
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache,
});

export default client;
