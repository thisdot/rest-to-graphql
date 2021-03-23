const { Locations } = require('../../models');

module.exports = async (req, resp) => {
  const page = parseInt(req.query?.page ?? 1, 10);
  const perPage = parseInt(req.query?.perPage ?? 20, 10);
  const [locations, locationsCount] = await Promise.all([
    Locations.findAll({
      limit: perPage,
      offset: (page - 1) * perPage,
    }),
    Locations.count()
  ]);

  resp.status(200);
  resp.send({
    data: locations,
    pageInfo: {
      page: page,
      perPage: perPage,
      total: locationsCount,
      totalPages: Math.ceil(locationsCount / perPage ),
    }
  });
};
