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

const getAllQueries = async (req, res) => {
  try {
    const { searchTerm } = req.query;
    const result = await querieService.getAllQueries(searchTerm);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Queries Fetch All Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "Queries Fetch All Failed!!",
      error,
    });
  }
};
const getMyAllQueries = async (req, res) => {
  try {
    const { email } = req.query;
    const result = await querieService.getMyAllQueries(email);
    res.status(httpStatus.OK).json({
      success: true,
      message: "My Queries Fetch All Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "My Queries Fetch All Failed!!",
      error,
    });
  }
};

const getSingleQuerie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await querieService.getSingleQuerie(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Querie Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "Querie Fetch Failed!!",
      error,
    });
  }
};

const updateQuerie = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await querieService.updateQuerie(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Querie updated Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "Querie updated Failed!!",
      error,
    });
  }
};

const deleteQuerie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await querieService.deleteQuerie(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Querie deleted Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      message: "Querie deleted Failed!!",
      error,
    });
  }
};

module.exports.querieController = {
  createNew,
  getAllQueries,
  getMyAllQueries,
  getSingleQuerie,
  updateQuerie,
  deleteQuerie,
};
