const {company,tags,performance} = require('../../database/models');
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
        let index=0;
        const id = data.company_id;
        const sector = data.company_sector;
        const companyDetailsById = await axios.get(`http://54.167.46.10/company/${id}`);
        console.log(companyDetailsById.data);
        

        const companyDetailsBySector = await axios.get('http://54.167.46.10/sector', { params: { name: sector } });
        console.log(JSON.stringify(companyDetailsBySector.data));

        company.create({
          id:companyDetailsById.data.id,
          name: companyDetailsById.data.name,
          description:companyDetailsById.data.description,
          ceo: companyDetailsById.data.ceo
        });
        for(let i=0;i<companyDetailsById.data.tags.length;i++){
          tags.create({
            company_id:companyDetailsById.data.id,
            name:companyDetailsById.data.tags[i]
          });
        }
        for(let i=0;i<companyDetailsBySector[index].performanceIndex.length;i++){
          performance.create({
            company_id:companyDetailsBySector.companyId,
            key:companyDetailsBySector.key,
            value:companyDetailsBySector.value
          });
        }
        
      }
      catch(err){
        console.log(err);
      }
      
    });
};
  





module.exports = {addCompany};
