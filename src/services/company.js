const db = require('../../database/models');
const axios = require('axios');
const csvParser = require('csv-parser');
const needle = require('needle');
const tag = require('../../database/models/tag');


const addCompany = async (urlLink) => {
  const url = urlLink;
  needle
    .get(url)
    .pipe(csvParser())
    .on('data', async (data) => {
      try {
        const id = data.company_id;
        const companyDetailsById = await axios.get(`http://54.167.46.10/company/${id}`);
        const company = {
          id: companyDetailsById.data.id,
          name: companyDetailsById.data.name,
          description: companyDetailsById.data.description[0],
          ceo: companyDetailsById.data.ceo,
          sector_id: 1
        };
        // await db.company.create(company);
        const tag = {
          tag_name: "",
          company_id: companyDetailsById.data.id
        };
        for (let obj of companyDetailsById.data.tags.entries()) {
          tag.tag_name = obj[1];
          // await db.tag.create(tag);
        }

        const sector = data.company_sector;
        const companyDetailsBySector = await axios.get('http://54.167.46.10/sector', { params: { name: sector } });
        const companyDetailSectorWise = (companyDetailsBySector.data);
        //console.log(typeof(companyDetailSectorWise));
        const companysector = {
          sectorName: sector
        };
        // var sectordata= await db.sector.create(companysector);
        for (const prop in companyDetailSectorWise) {

          const score = Number(companyDetailSectorWise[prop].performanceIndex[0].value) * 10 + Number(companyDetailSectorWise[prop].performanceIndex[0].value) / 1000 + Number(companyDetailSectorWise[prop].performanceIndex[0].value) * 10 + Number(companyDetailSectorWise[prop].performanceIndex[0].value) / 4;
          //  console.log(sectordata.id);
          // await db.company.update({ sectorId: sectordata.id, score: `${score ? score : 0}` }, { where: {
          //  id: companyDetailSectorWise[prop].companyId
        }


        // await db.company.create(company);






      }
      catch (err) {
        console.log(err);
      }


    });
  const datav = await db.sector.findAll({ include: ['companies'] });

  console.log((datav));
  return datav;

};
const getCompany = async () => {

};















module.exports = { addCompany, getCompany };
