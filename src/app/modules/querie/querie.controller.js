const httpStatus = require("http-status");
const { querieService } = require("./querie.service");

const createNew = async (req, res) => {
  try {
    const data = req.body;
    const result = await querieService.createNew(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Querie Created Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "Querie Created Failed!!",
      error,
    });
  }
};

module.exports.querieController = {
  createNew,
};
