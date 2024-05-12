/* eslint-disable no-undef */
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: "Unauthorised Access!!",
    });
  }
  jwt.verify(token, process.env.access_token_secret, (err, decoded) => {
    // not valid token
    if (err)
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "Unauthorised Access!!",
      });
    // valid token
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
