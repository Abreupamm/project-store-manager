const express = require('express');

const router = express.Router();

const name = require('../middlewares/products/nameProductValid');
const product = require('../middlewares/products/productIdValid');

const productsController = require('../controllers/productsContoller');

router.post('/', name.validName, productsController.productPost);

router.get('/', productsController.products);

router.put('/:id', product.validIsProductById, name.validName, productsController.productPut);

router.get('/:id', productsController.productById);

router.delete('/:id', product.validIsProductById, productsController.productByIdDelete);

module.exports = router;