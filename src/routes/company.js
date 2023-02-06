
const express = require('express');
const {addCompany,getPerformance,getCompany} = require('../controllers/company');


const router = express.Router();

router.post('/save',addCompany);
router.get('/performance',getPerformance);
router.get('/company',getCompany);

module.exports = router;
