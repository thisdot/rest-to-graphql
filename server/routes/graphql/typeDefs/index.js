const { mergeTypeDefs } = require('@graphql-tools/merge');
const { typeDefs: gqlScalarTypeDefs } = require('graphql-scalars');

module.exports = mergeTypeDefs([
  gqlScalarTypeDefs,
  require('./character'),
  require('./location'),
  require('./pagination'),
]);
