const db = require('../../database/models');
const axios = require('axios');
const csvParser = require('csv-parser');
const needle = require('needle');


const addCompany =  async(urlLink) => {
  const url = urlLink;
  needle
    .get(url)
    .pipe(csvParser())
    .on('data', async(data) => {
      try{
        const id = data.company_id;
        const sector = data.company_sector;
        const companyDetailsById = await axios.get(`http://54.167.46.10/company/${id}`);
        const company = {
          id: companyDetailsById.data.id,
          name: companyDetailsById.data.name,
          description: companyDetailsById.data.description,
          ceo: companyDetailsById.data.ceo,
        };
        await db.company.create(company);
        

        const companyDetailsBySector = await axios.get('http://54.167.46.10/sector', { params: { name: sector } });

        companyDetailsBySector.data.forEach( async (Data) => {
          const score= ((Number(Data.performanceIndex[0].value) * 10) + (Number(Data.performanceIndex[1].value) / 10000) + (Number(Data.performanceIndex[2].value) * 10) + Number(Data.performanceIndex[3].value)) / 4;

        });
        return db.company;

        

      }
      catch(err){
        console.log(err);
      }
      
    });
};






  





module.exports = {addCompany};
