const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/carts');

router.get('/new', cartCtrl.new)

module.exports = router;