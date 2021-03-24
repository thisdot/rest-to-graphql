const gql = require('graphql-tag');

const CharacterTypeDef = gql`
  type Character {
    id: ID!
    avatar: URL
    currentLocation: Location
    gender: Gender
    name: String!
    origin: Location
    species: String!
    status: CharacterStatus
    type: String!
  }

  type CharacterConnection {
    nodes: [Character]
    pageInfo: PageInfo
  }

  enum CharacterStatus {
    ALIVE
    DEAD
    UNKNOWN
  }

  enum Gender {
    GENDERLESS
    FEMALE
    MALE
  }

  type Query {
    characters(pagination: PaginationInput): CharacterConnection
    character(id: ID!): Character
  }
`;

module.exports = CharacterTypeDef;
