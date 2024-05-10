const express = require("express");
const { querieRoutes } = require("../modules/querie/querie.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/queries",
    route: querieRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
