const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLID,
  GraphQLString,
} = require('graphql');

const characterGenderEnum = new GraphQLEnumType({
  name: 'CharacterGender',
  values: {
    GENDERLESS: {
      value: 'GENDERLESS',
    },
    FEMALE: {
      value: 'FEMALE',
    },
    MALE: {
      value: 'MALE',
    },
  },
});

const characterStatusEnum = new GraphQLEnumType({
  name: 'CharacterStatus',
  values: {
    ALIVE: {
      value: 'ALIVE',
    },
    DEAD: {
      value: 'DEAD',
    },
    UNKNOWN: {
      value: 'UNKNOWN',
    },
  },
});

module.exports = new GraphQLObjectType({
  name: 'Character',
  description: 'a character',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The character\'s ID',
    },
    avatar: {
      type: GraphQLString,
      description: 'URL for image asset',
      resolve: async (character) => character.image,
    },
    gender: {
      type: characterGenderEnum,
      description: 'How they identify',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Human readable name',
    },
    species: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Species identifer',
    },
    status: {
      type: characterStatusEnum,
      description: 'Status of life',
      resolve: async (character) => character.status ?? 'UNKNOWN',
    },
    type: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Description of the entity',
    },
  },
});
