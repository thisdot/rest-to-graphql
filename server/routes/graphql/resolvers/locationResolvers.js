const { Locations } = require('../../../models');
const { locationHelper } = require('../helpers');

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
    location: async (parentValue, { id }, context) => locationHelper.getLocation(id),
  }
}

module.exports = resolvers;
