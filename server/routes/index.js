const routes = require('express').Router();
const { graphqlHTTP } = require('express-graphql');

const characters = require('./characters');
const locations = require('./locations');
const graphql = require('./graphql');

routes.use('/characters', characters);
routes.use('/locations', locations);
routes.use('/api', graphql);

module.exports = routes;
