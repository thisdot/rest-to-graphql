const routes = require('express').Router();
// const { graphqlHTTP } = require('express-graphql');

routes.use('/characters', require('./characters'));
routes.use('/locations', require('./locations'));
routes.use('/api', require('./graphql'));

module.exports = routes;
