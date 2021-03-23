const gql = require('graphql-tag');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { typeDefs: gqlScalarTypeDefs } = require('graphql-scalars');

module.exports = mergeTypeDefs([
  gqlScalarTypeDefs,
  gql`
    type Query {
      hello: String
    }
  `,
]);
