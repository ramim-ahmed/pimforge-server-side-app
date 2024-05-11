const httpStatus = require("http-status");
const { recommendationService } = require("./recommendation.service");

const createRecommendation = async (req, res) => {
  try {
    const data = req.body;
    const result = await recommendationService.createRecommendation(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Recommendation Created Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "Recommendation Created Failed!!",
      error,
    });
  }
};

const getMyRecommendations = async (req, res) => {
  try {
    const { email } = req.query;
    const result = await recommendationService.getMyRecommendations(email);
    res.status(httpStatus.OK).json({
      success: true,
      message: "My Recommendations Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "My Recommendations Fetch Failed!!",
      error,
    });
  }
};

const getRecommendationOnProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await recommendationService.getRecommendationOnProduct(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Recommendations On Product Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "Recommendations On Product Fetch Failed!!",
      error,
    });
  }
};

const getRecommendationsForMe = async (req, res) => {
  try {
    const { email } = req.query;
    const result = await recommendationService.getRecommendationsForMe(email);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Recommendations For Me Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "Recommendations For Me Fetch Failed!!",
      error,
    });
  }
};

const deleteRecommendation = async (req, res) => {
  try {
    const { id } = req.params;
    const { querieId } = req.query;
    const result = await recommendationService.deleteRecommendation(
      id,
      querieId
    );
    res.status(httpStatus.OK).json({
      success: true,
      message: "Recommendation deleted Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "Recommendation deleted Failed!!",
      error,
    });
  }
};

module.exports.recommendationController = {
  createRecommendation,
  getMyRecommendations,
  getRecommendationsForMe,
  getRecommendationOnProduct,
  deleteRecommendation,
};
