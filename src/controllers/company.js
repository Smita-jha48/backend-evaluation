const companyService = require('../services/company');
//const httpError = require('../utils/errors/HTTPError');

const addCompany = async (req, res) => {
    
  try {
    const company = await companyService.addCompany(req.body.urlLink);
    console.log(company);
    res.status(201).json(company);
  
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong' });
  }

  
};

module.exports = {addCompany};