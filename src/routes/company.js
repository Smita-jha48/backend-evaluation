
const express = require('express');
const {addCompany} = require('../controllers/company');


const router = express.Router();

router.post('/save',addCompany);

module.exports = router;
