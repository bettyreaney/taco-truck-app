const express = require('express');
const router = express.Router();
const truckCtrl = require('../controllers/trucks');

router.get('/', truckCtrl.index);
router.post('/', truckCtrl.new);

module.exports = router;
