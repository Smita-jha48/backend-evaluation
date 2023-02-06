const companyService = require('../services/company');
//const httpError = require('../utils/errors/HTTPError');

const addCompany = async (req, res) => {

  try {
    const company = await companyService.addCompany(req.body.urlLink);

    res.status(201).json({
      data: company
    }
    );

  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }


};
const getCompany = async (req, res) => {
  try {
    const companyPerformance = await companyService.getCompany();
    res.status(200).json({
      data: companyPerformance
    });
  } catch (e) {
    res.status(400).json({
      message: e.message
    });
  }
};
const getPerformance = async (req, res) => {
  try {
    const companyPerformance = await companyService.getPerformance();
    res.status(200).json({
      data: companyPerformance
    });
  } catch (e) {
    res.status(400).json({
      message: e.message
    });
  }
};
module.exports = { addCompany, getPerformance, getCompany };