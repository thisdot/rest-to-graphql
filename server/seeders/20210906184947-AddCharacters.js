const characters = require('./characters.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Characters', characters, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Characters', null, {});
  }
};
