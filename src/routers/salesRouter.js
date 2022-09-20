const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const productIdValid = require('../middlewares/sales/productIdValid');
const quantityValid = require('../middlewares/sales/quantityValid');
const saleValid = require('../middlewares/sales/saleValid');

router.post('/',
  productIdValid.validProductId,
  quantityValid.validQuantity,
  salesController.sales);

router.get('/', salesController.getSales);

router.get('/:id', saleValid.validSaleById, salesController.getSales);

router.delete('/:id', saleValid.validSaleById, salesController.deleteSales);

router.put('/:id',
  saleValid.validSaleById,
  productIdValid.validProductId,
  quantityValid.validQuantity,
  salesController.upDateSales);

module.exports = router;