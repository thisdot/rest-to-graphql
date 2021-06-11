const { Characters } = require('../../../models');
const { locationHelper } = require('../helpers');

const resolvers = {
  Character: {
    avatar: async (character) => character.image,
    currentLocation: async ({ locationId }) => locationHelper.getLocation(locationId, true),
    origin: async ({ originId }) => locationHelper.getLocation(originId, true),
    status: async (character) => character.status ?? 'UNKNOWN',
  },
  Query: {
    characters: async (parentValue, { pagination = {} }, context) => {
      const { page = 1, perPage = 20 } = pagination;
      const [characters, charactersCount] = await Promise.all([
        Characters.findAll({
          limit: perPage,
          offset: (page - 1) * perPage,
        }),
        Characters.count()
      ]);

      return {
        nodes: characters,
        pageInfo: {
          page: page,
          perPage: perPage,
          total: charactersCount,
          totalPages: Math.ceil(charactersCount / perPage ),
        }
      };
    },
    character: async (parentValue, { id }, context) => {
      if (id <= 0) {
        throw new Error('ID must be a positive integer');
      }

      const character = await Characters.findByPk(id);
      if (!character) {
        throw new Error('Character cannot be found');
      }
      return character;
    },
  }
}

module.exports = resolvers;
