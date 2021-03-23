const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const Query = require('./queries');

const schema = new GraphQLSchema({
  query: Query,
});

module.exports = graphqlHTTP({
  schema,
  graphiql: true,
});
