import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
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
  }),
});

export default client;
