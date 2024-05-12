const express = require("express");
const { tokenController } = require("./token.controller");
const router = express.Router();

router.post("/access-token", tokenController.createNewToken);
router.post("/clear-token", tokenController.clearCookieToken);
module.exports.tokenRoutes = router;
