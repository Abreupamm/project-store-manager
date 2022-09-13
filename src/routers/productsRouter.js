const express = require('express');

const router = express.Router();

const { validName } = require('../middlewares/nameProductValid');

const productsController = require('../controllers/productsContoller');

router.post('/', validName, productsController.productPost);

router.get('/', productsController.products);

router.get('/:id', productsController.productById);

module.exports = router;