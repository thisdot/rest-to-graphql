const { mergeTypeDefs } = require('@graphql-tools/merge');
const { URLTypeDefinition } = require('graphql-scalars');

module.exports = mergeTypeDefs([
  {
    URLTypeDefinition,
  },
  require('./character'),
  require('./datetime'),
  require('./location'),
  require('./pagination'),
]);
