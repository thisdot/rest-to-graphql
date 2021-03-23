const fetch = require('node-fetch');

module.exports = async (parentValue, args, request) => {
  const resp = await fetch('http://localhost:4000/characters');
  const data = await resp.json();
  return data;
};
