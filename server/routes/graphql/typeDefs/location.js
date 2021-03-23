const gql = require('graphql-tag');

const LocationTypeDef = gql`
  type Location {
    id: ID!
    dimension: String!
    name: String!
    type: String!
  }

  type LocationConnection {
    nodes: [Location]
    pageInfo: PageInfo
  }

  type Query {
    locations(pagination: PaginationInput): LocationConnection
    location(id: ID!): Location
  }
`;

module.exports = LocationTypeDef;
