const Querie = require("./querie.model");

const createNew = async (data) => {
  const result = await Querie.create(data);
  return result;
};

module.exports.querieService = {
  createNew,
};
