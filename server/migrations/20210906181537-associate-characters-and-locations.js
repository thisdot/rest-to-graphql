'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Characters', 'locationId', {
      allowNull: true,
      references: {
        model: 'Locations',
        key: 'id'
      },
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('Characters', 'originId', {
      allowNull: true,
      references: {
        model: 'Locations',
        key: 'id'
      },
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Characters', 'locationId');
    await queryInterface.removeColumn('Characters', 'originId');
  }
};
