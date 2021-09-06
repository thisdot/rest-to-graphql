const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Appearance', {
    CharacterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Characters',
        key: 'id'
      }
    },
    EpisodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Episodes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Appearance',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Appearance_pkey",
        unique: true,
        fields: [
          { name: "CharacterId" },
          { name: "EpisodeId" },
        ]
      },
    ]
  });
};
