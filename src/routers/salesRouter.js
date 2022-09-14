const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const { validProductId } = require('../middlewares/sales/productIdValid');
const { validQuantity } = require('../middlewares/sales/quantityValid');
const { validSaleById } = require('../middlewares/sales/saleValid');

router.post('/',
  validProductId,
  validQuantity,
  salesController.sales);

router.get('/', salesController.getSales);
router.get('/:id', validSaleById, salesController.getSales);
router.delete('/:id', validSaleById, salesController.deleteSales);

module.exports = router;