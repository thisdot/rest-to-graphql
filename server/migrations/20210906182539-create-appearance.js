module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appearances', {
      characterId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Characters',
          key: 'id'
        },
        type: Sequelize.INTEGER,
      },
      episodeId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Episodes',
          key: 'id'
        },
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Appearances');
  }
};
