const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate(models) {
      Character.belongsTo(models.Location, {
        as: 'location',
        foreignKey: 'locationId',
      });
      Character.belongsTo(models.Location, {
        as: 'origin',
        foreignKey: 'originId',
      });
      Character.belongsToMany(models.Episode, {
        through: models.Appearance,
      });
    }
  };

  Character.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    gender: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    originId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    species: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });

  return Character;
};
