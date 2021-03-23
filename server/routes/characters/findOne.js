const { Characters } = require('../../models');

module.exports = async (req, resp) => {
  const id = parseInt(req.params?.id, 10);
  if (id <= 0) {
    resp.status(400);
    resp.send('Invalid ID');
    return;
  }

  const character = await Characters.findByPk(id);

  if (!character) {
    resp.status(404);
    resp.send('Character does not exist');
    return;
  }

  resp.append('Access-Control-Allow-Origin', '*');
  resp.append('Access-Control-Allow-Credentials', true);
  resp.status(200);
  resp.send({
    data: character,
  });
};
