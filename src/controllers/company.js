const companyService = require('../services/company');
//const httpError = require('../utils/errors/HTTPError');

const addCompany = async (req, res) => {
    
  try {
    const company = await companyService.addCompany(req.body.urlLink);
    res.status(201).json(company);
  
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong' });
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
module.exports = {addCompany,getPerformance};