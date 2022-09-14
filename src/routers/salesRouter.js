const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const { validProductId } = require('../middlewares/sales/productIdValid');
const { validQuantity } = require('../middlewares/sales/quantityValid');

router.post('/',
  validProductId,
  validQuantity,
  salesController.sales);

router.get('/', salesController.getSales);

module.exports = router;