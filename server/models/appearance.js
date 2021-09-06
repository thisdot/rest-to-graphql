'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appearance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Appearance.init({
    characterId: DataTypes.INTEGER,
    episodeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appearance',
  });
  return Appearance;
};