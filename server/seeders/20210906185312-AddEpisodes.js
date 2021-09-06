'use strict';

const episodes = require('./episodes.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Episodes', episodes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Episodes', null, {});
  }
};
