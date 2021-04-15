const express = require('express');
const router = express.Router();
const truckCtrl = require('../controllers/trucks');

router.get('/new', truckCtrl.new);

module.exports = router;
