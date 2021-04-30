const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/carts');

router.get('/new', cartCtrl.new);
router.get('/:id/edit', cartCtrl.edit);
router.put('/:id', cartCtrl.update);



module.exports = router;