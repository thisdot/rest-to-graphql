const { Locations } = require('../../../models');

const resolvers = {
  Query: {
    locations: async (parentValue, { pagination = {} }, context) => {
      const { page = 1, perPage = 20 } = pagination;
      const [locations, locationsCount] = await Promise.all([
        Locations.findAll({
          limit: perPage,
          offset: (page - 1) * perPage,
        }),
        Locations.count()
      ]);

      return {
        nodes: locations,
        pageInfo: {
          page: page,
          perPage: perPage,
          total: locationsCount,
          totalPages: Math.ceil(locationsCount / perPage ),
        }
      };
    },
    location: async (parentValue, { id }, context) => {
      if (id <= 0) {
        throw new Error('ID must be a positive integer');
      }

      const location = await Locations.findByPk(id);
      if (!location) {
        throw new Error('Location cannot be found');
      }
      return location;
    },
  }
}

module.exports = resolvers;
