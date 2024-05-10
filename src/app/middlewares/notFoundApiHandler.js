const httpStatus = require("http-status");

const notFoundApiHanlder = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found!!",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API not found!!",
      },
    ],
  });
  next();
};

module.exports = notFoundApiHanlder;
