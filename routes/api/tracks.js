const express = require('express');
const router = express.Router();
const tracksCtrl = require('../../controllers/tracks');
router.get('/', tracksCtrl.index);
router.post('/', tracksCtrl.create);
router.delete('/:id', tracksCtrl.delete);
module.exports = router;