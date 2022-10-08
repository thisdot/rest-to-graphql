const { Locations } = require('../../../models');
const { locationLoader } = require('../loaders');

const getLocation = async (id, skipErrors = false) => {
  if (!id) {
    return null;
  }

  if (id <= 0 && !skipErrors) {
    throw new Error('ID must be a positive integer');
  }

  const location = await locationLoader.load(id);
  // const location = await Locations.findByPk(id);
  if (!location && !skipErrors) {
    throw new Error('Location cannot be found');
  }
  return location;
};

module.exports = {
  getLocation,
};
