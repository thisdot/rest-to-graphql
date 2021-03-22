var DataTypes = require("sequelize").DataTypes;
var _Appearance = require("./Appearance");
var _Characters = require("./Characters");
var _Episodes = require("./Episodes");
var _Locations = require("./Locations");

function initModels(sequelize) {
  var Appearance = _Appearance(sequelize, DataTypes);
  var Characters = _Characters(sequelize, DataTypes);
  var Episodes = _Episodes(sequelize, DataTypes);
  var Locations = _Locations(sequelize, DataTypes);

  Characters.belongsToMany(Episodes, { as: 'Episodes', through: Appearance, foreignKey: "CharacterId", otherKey: "EpisodeId" });
  Episodes.belongsToMany(Characters, { as: 'Characters', through: Appearance, foreignKey: "EpisodeId", otherKey: "CharacterId" });
  Appearance.belongsTo(Characters, { as: "Character", foreignKey: "CharacterId"});
  Characters.hasMany(Appearance, { as: "Appearances", foreignKey: "CharacterId"});
  Appearance.belongsTo(Episodes, { as: "Episode", foreignKey: "EpisodeId"});
  Episodes.hasMany(Appearance, { as: "Appearances", foreignKey: "EpisodeId"});
  Characters.belongsTo(Locations, { as: "location", foreignKey: "locationId"});
  Locations.hasMany(Characters, { as: "Characters", foreignKey: "locationId"});
  Characters.belongsTo(Locations, { as: "origin", foreignKey: "originId"});
  Locations.hasMany(Characters, { as: "origin_Characters", foreignKey: "originId"});

  return {
    Appearance,
    Characters,
    Episodes,
    Locations,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
