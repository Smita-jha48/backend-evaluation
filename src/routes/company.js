
const express = require('express');
const {addCompany,getPerformance} = require('../controllers/company');


const router = express.Router();

router.post('/save',addCompany);
router.get('/performance',getPerformance);

module.exports = router;
