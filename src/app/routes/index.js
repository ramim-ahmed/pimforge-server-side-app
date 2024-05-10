const express = require("express");
const { querieRoutes } = require("../modules/querie/querie.route");
const {
  recommendationRoutes,
} = require("../modules/recommendation/recommendation.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/queries",
    route: querieRoutes,
  },
  {
    path: "/recommendations",
    route: recommendationRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
