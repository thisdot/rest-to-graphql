const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
