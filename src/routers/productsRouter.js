const express = require('express');

const router = express.Router();

const { validName } = require('../middlewares/products/nameProductValid');
const { validIsProductById } = require('../middlewares/products/productIdValid');

const productsController = require('../controllers/productsContoller');

router.post('/', validName, productsController.productPost);

router.get('/', productsController.products);

router.put('/:id', validIsProductById, validName, productsController.productPut);

router.get('/:id', productsController.productById);

module.exports = router;