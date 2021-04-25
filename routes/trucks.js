const express = require('express');
const router = express.Router();
const truckCtrl = require('../controllers/trucks');

router.get('/', truckCtrl.index);
router.get('/', truckCtrl.new);
router.post('/', truckCtrl.create);
router.delete('/:id', truckCtrl.delete);

module.exports = router;
