const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
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
