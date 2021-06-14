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

  "A object representing a character in the rick & morty universe"
  type Character {
    id: ID!
    "URL to their avatar image"
    avatar: String
    createdAt(format: DateTimeDisplayFormat = DATETIME): DateTime!
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
    "A paginated query to fetch all the characters"
    characters(pagination: PaginationInput): CharacterConnection
    character(id: ID!): Character
  }
`;

module.exports = CharacterTypeDef;
