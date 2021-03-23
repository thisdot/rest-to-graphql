const fetch = require('node-fetch');

const resolvers = {
  Character: {
    avatar: async (character) => character.image,
    status: async (character) => character.status ?? 'UNKNOWN',
  },
  Query: {
    characters: async (parentValue, { pagination = {} }, context) => {
      const { page = 1, perPage = 20 } = pagination;
      const resp = await fetch(`http://localhost:4000/characters?page=${page}&perPage=${perPage}`);
      const { data: nodes, pageInfo } = await resp.json();
      return { nodes, pageInfo };
    },
    character: async (parentValue, { id }, context) => {
      const resp = await fetch(`http://localhost:4000/characters/${id}`);
      const { data } = await resp.json();
      return data;
    },
  }
}

module.exports = resolvers;
