const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const httpStatus = require("http-status");
const { applicationRoutes } = require("./app/routes");
const notFoundApiHanlder = require("./app/middlewares/notFoundApiHandler");
const globalErrorHandler = require("./app/middlewares/globalErrorHandler");

// backend application
const app = express();

// middlware
app.use(
  cors({
    origin: ["https://pim-forge-client-app.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// application routes
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    message: "Welcome to PIM Forge server",
  });
});

app.use("/api/v1", applicationRoutes);

// not found route handler
app.use(notFoundApiHanlder);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
