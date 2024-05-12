/* eslint-disable no-undef */
const httpStatus = require("http-status");
const { tokenService } = require("./token.service");

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};
const createNewToken = async (req, res) => {
  try {
    const user = req.body;
    const token = await tokenService.createNewToken(user);
    res
      .cookie("access_token", token, cookieOptions)
      .status(httpStatus.OK)
      .json({
        success: true,
      });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      error,
    });
  }
};

const clearCookieToken = async (req, res) => {
  try {
    const token = await tokenService.clearCookieToken();
    res
      .clearCookie(token, { ...cookieOptions, maxAge: 0 })
      .status(httpStatus.OK)
      .json({
        success: true,
      });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      error,
    });
  }
};

module.exports.tokenController = {
  createNewToken,
  clearCookieToken,
};
