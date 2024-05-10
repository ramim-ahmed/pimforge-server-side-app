const Querie = require("./querie.model");

const createNew = async (data) => {
  const result = await Querie.create(data);
  return result;
};

const getAllQueries = async () => {
  const result = await Querie.find({}).sort({ createdAt: "desc" });
  return result;
};

const getMyAllQueries = async (email) => {
  const result = await Querie.find({ "user.email": email }).sort({
    createdAt: "desc",
  });
  return result;
};

const getSingleQuerie = async (id) => {
  const result = await Querie.findOne({ _id: id });
  return result;
};

const updateQuerie = async (id, data) => {
  const result = await Querie.updateOne({ _id: id }, data);
  return result;
};

const deleteQuerie = async (id) => {
  const result = await Querie.deleteOne({ _id: id });
  return result;
};

module.exports.querieService = {
  createNew,
  getAllQueries,
  getMyAllQueries,
  getSingleQuerie,
  updateQuerie,
  deleteQuerie,
};
