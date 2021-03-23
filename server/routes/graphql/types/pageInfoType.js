const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'PageInfo',
  description: 'pagination data structure',
  fields: {
    page: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Current page',
    },
    perPage: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Itmes per page',
    },
    total: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Total number of items',
    },
    totalPages: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Total available pages',
    },
  },
});
