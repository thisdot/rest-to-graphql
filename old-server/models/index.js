const Sequelize = require('sequelize');
const CharacterModel = require('./character');
const LocationModel = require('./location');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let connection;
if (config.use_env_variable) {
  connection = new Sequelize(process.env[config.use_env_variable], config);
} else {
  connection = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = {
  Characters: CharacterModel(connection, Sequelize),
  Locations: LocationModel(connection, Sequelize),
};
