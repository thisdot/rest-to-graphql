const { mergeResolvers } = require('@graphql-tools/merge')
const { resolvers: gqlScalarResolvers } = require('graphql-scalars');

module.exports = mergeResolvers([
  gqlScalarResolvers,
  {
    Query: {
      hello: async () => 'Hello World',
    },
  },
  require('./characterResolvers'),
]);
