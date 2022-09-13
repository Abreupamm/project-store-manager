const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsContoller');

router.get('/products', productsController.products);

router.get('/products/:id', productsController.productById);

module.exports = router;