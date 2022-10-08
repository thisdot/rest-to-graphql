const { Characters } = require('../../models');

module.exports = async (req, resp) => {
  const page = parseInt(req.query?.page ?? 1, 10);
  const perPage = parseInt(req.query?.perPage ?? 20, 10);
  const [characters, charactersCount] = await Promise.all([
    Characters.findAll({
      limit: perPage,
      offset: (page - 1) * perPage,
    }),
    Characters.count()
  ]);

  resp.status(200);
  resp.send({
    data: characters,
    pageInfo: {
      page: page,
      perPage: perPage,
      total: charactersCount,
      totalPages: Math.ceil(charactersCount / perPage ),
    }
  });
};
