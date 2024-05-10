const Querie = require("../querie/querie.model");
const Recommendation = require("./recommendation.model");

const createRecommendation = async (data) => {
  const { querieId } = data;
  let result = null;
  result = await Querie.updateOne(
    { _id: querieId },
    { $inc: { recommendationCount: 1 } }
  );
  if (result) {
    result = await Recommendation.create(data);
    return result;
  }
};

const getMyRecommendations = async (email) => {
  const result = await Recommendation.find({
    "recommendationUser.email": email,
  }).sort({ createdAt: "desc" });
  return result;
};

const getRecommendationsForMe = async (email) => {
  const result = await Recommendation.find({ "queryUser.email": email }).sort({
    createdAt: "desc",
  });
  return result;
};

const deleteRecommendation = async (id, querieId) => {
  let result = null;
  result = await Querie.updateOne(
    { _id: querieId },
    { $inc: { recommendationCount: -1 } }
  );
  if (result) {
    result = await Recommendation.deleteOne({ _id: id });
    return result;
  }
};

module.exports.recommendationService = {
  createRecommendation,
  deleteRecommendation,
  getMyRecommendations,
  getRecommendationsForMe,
};
