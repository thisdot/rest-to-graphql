const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Locations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dimension: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Locations',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Locations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "locations_dimension",
        fields: [
          { name: "dimension" },
        ]
      },
      {
        name: "locations_type",
        fields: [
          { name: "type" },
        ]
      },
    ]
  });
};
