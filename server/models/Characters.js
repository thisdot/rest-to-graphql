const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Characters', {
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
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Locations',
        key: 'id'
      }
    },
    originId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Locations',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    species: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Characters',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Characters_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "characters_location_id",
        fields: [
          { name: "locationId" },
        ]
      },
      {
        name: "characters_origin_id",
        fields: [
          { name: "originId" },
        ]
      },
      {
        name: "characters_status",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
