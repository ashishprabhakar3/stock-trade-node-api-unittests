const express = require('express');
const router = express.Router();
const tradesController = require('./../controllers/trades');

// post route creates new trade
router.post('/',tradesController.create);

// get route creates new trade
router.get('/',tradesController.findAll);
router.get('/:id',tradesController.findOne);
router.delete('/:id', tradesController.delete);
router.patch('/:id', tradesController.update);
router.put('/:id', tradesController.update);
module.exports = router;

