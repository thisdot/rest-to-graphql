'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.hasMany(models.Characters, {
        foreignKey: 'locationId',
      });
      Location.hasMany(models.Characters, {
        foreignKey: 'originId',
      });
    }
  };
  Location.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    dimension: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};
