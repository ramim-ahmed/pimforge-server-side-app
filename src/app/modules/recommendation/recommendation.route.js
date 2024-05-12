const express = require("express");
const { recommendationController } = require("./recommendation.controller");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.get(
  "/my-recommendations",
  verifyToken,
  recommendationController.getMyRecommendations
);
router.get(
  "/recommendations-for-me",
  verifyToken,
  recommendationController.getRecommendationsForMe
);
router.get(
  "/reacommendation-on-product/:id",
  recommendationController.getRecommendationOnProduct
);
router.post("/create-new", recommendationController.createRecommendation);
router.delete("/:id", recommendationController.deleteRecommendation);
module.exports.recommendationRoutes = router;
