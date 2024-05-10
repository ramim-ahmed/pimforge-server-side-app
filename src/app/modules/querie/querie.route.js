const express = require("express");
const { querieController } = require("./querie.controller");
const router = express.Router();

router.get("/", querieController.getAllQueries);
router.get("/my-queries", querieController.getMyAllQueries);
router.get("/:id", querieController.getSingleQuerie);
router.post("/create-new", querieController.createNew);
router.patch("/:id", querieController.updateQuerie);
router.delete("/:id", querieController.deleteQuerie);

module.exports.querieRoutes = router;
