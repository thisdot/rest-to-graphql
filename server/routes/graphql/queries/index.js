const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const { charactersConnectionType, characterType } = require('../types');
const { charactersResolver } = require('../resolvers');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello world!"
    },
    characters: {
      type: charactersConnectionType,
      resolve: charactersResolver,
    },
  },
});
