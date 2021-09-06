const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appearance extends Model {
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
