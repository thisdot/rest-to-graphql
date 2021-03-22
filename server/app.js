const express = require('express');
const app = express();
const port = 4000;
const { Characters, Locations } = require('./models');

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

app.get('/locations', async (req, resp) => {
  const page = parseInt(req.query?.page ?? 1, 10);
  const perPage = parseInt(req.query?.perPage ?? 20, 10);
  const [locations, locationsCount] = await Promise.all([
    Locations.findAll({
      limit: perPage,
      offset: (page - 1) * perPage,
    }),
    Locations.count()
  ]);

  resp.append('Access-Control-Allow-Origin', '*');
  resp.append('Access-Control-Allow-Credentials', true);
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
});

app.get('/locations/:id', async (req, resp) => {
  const id = parseInt(req.params?.id, 10);
  if (id <= 0) {
    resp.status(400);
    resp.send('Invalid ID');
    return;
  }

  const location = await Locations.findByPk(id);

  if (!location) {
    resp.status(404);
    resp.send('Location does not exist');
    return;
  }

  resp.append('Access-Control-Allow-Origin', '*');
  resp.append('Access-Control-Allow-Credentials', true);
  resp.status(200);
  resp.send({
    data: location,
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
