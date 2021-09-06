'use strict';

const appearances = require('./appearances.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const modifiedAppearances = appearances.map(appearance => ({
      characterId: appearance.CharacterId,
      episodeId: appearance.EpisodeId,
    }));
    await queryInterface.bulkInsert('Appearances', modifiedAppearances, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Appearances', null, {});
  }
};
