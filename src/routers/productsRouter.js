const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsContoller');

router.post('/', productsController.productPost);

router.get('/', productsController.products);

router.get('/:id', productsController.productById);

module.exports = router;