const { Op } = require('sequelize');
const DataLoader = require('dataloader');
const { Characters } = require('../../../models');

const getBatchCharacters = async (keys) => {
  const characters = await Characters.findAll({
    where: {
      id: {
        [Op.in]: keys,
      }
    }
  });
  const charactersById = characters.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {})
  return keys.map(key => charactersById[key] || new Error(`No result for ${key}`));
};
const characterLoader = new DataLoader(getBatchCharacters);

module.exports = characterLoader;
