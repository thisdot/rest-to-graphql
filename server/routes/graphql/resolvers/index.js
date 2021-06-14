const { mergeResolvers } = require('@graphql-tools/merge')
const { URLResolver } = require('graphql-scalars');

module.exports = mergeResolvers([
  {
    URLResolver,
  },
  require('./characterResolvers'),
  require('./datetimeResolvers'),
  require('./locationResolvers'),
]);
