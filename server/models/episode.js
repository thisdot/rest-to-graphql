'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Episode.belongsToMany(models.Character, {
        through: models.Appearance,
      });
    }
  };
  Episode.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    airDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Episode',
  });
  return Episode;
};
