const { Op } = require('sequelize');
const DataLoader = require('dataloader');
const { Locations } = require('../../../models');

const getBatchLocations = async (keys) => {
  const locations = await Locations.findAll({
    where: {
      id: {
        [Op.in]: keys,
      }
    }
  });
  const locationsById = locations.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {})
  return keys.map(key => locationsById[key] || new Error(`No result for ${key}`));
};
const locationLoader = new DataLoader(getBatchLocations);

module.exports = locationLoader;
