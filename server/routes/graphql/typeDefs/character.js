const gql = require('graphql-tag');

const CharacterTypeDef = gql`
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

  type Query {
    characters(pagination: PaginationInput): CharacterConnection
    character(id: ID!): Character
  }
`;

module.exports = CharacterTypeDef;
