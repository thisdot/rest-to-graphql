const { mergeResolvers } = require('@graphql-tools/merge')
const { resolvers: gqlScalarResolvers } = require('graphql-scalars');

module.exports = mergeResolvers([
  gqlScalarResolvers,
  require('./characterResolvers'),
  require('./locationResolvers'),
]);
