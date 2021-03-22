const express = require('express');
const app = express();
const port = 4000;
const { Characters } = require('./models');

app.get('/characters', async (req, resp) => {
  const page = parseInt(req.query?.page ?? 1, 10);
  const perPage = parseInt(req.query?.perPage ?? 20, 10);
  const [characters, charactersCount] = await Promise.all([
    Characters.findAll({
      limit: perPage,
      offset: (page - 1) * perPage,
    }),
    Characters.count()
  ]);

  resp.append('Access-Control-Allow-Origin', '*');
  resp.append('Access-Control-Allow-Credentials', true);
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
});

app.get('/characters/:id', async (req, resp) => {
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
});

app.get('/locations', (req, resp) => {
  resp.send('hello worlds');
});

app.get('/locations/:id', (req, resp) => {
  resp.send('hello world');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
