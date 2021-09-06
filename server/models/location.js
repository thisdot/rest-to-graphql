const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
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
