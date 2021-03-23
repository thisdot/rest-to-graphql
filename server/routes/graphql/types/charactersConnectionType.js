const {
  GraphQLObjectType,
  GraphQLList,
} = require('graphql');
const characterType = require('./characterType');
const pageInfoType = require('./pageInfoType');

module.exports = new GraphQLObjectType({
  name: 'CharacterConnection',
  description: 'paginated characters',
  fields: {
    nodes: {
      type: new GraphQLList(characterType),
      resolve: async (root) => root.data,
    },
    pageInfo: {
      type: pageInfoType,
    },
  },
});
