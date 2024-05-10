const express = require("express");
const { querieController } = require("./querie.controller");
const router = express.Router();

router.post("/create-new", querieController.createNew);

module.exports.querieRoutes = router;
