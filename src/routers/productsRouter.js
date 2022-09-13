const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsContoller');

router.get('/', productsController.products);

router.get('/:id', productsController.productById);

module.exports = router;